import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function McqPage() {
  const { topicId } = useParams();
  const nav = useNavigate();

  // Vite-friendly glob of local MCQ modules for fallback
  // memoize the glob result so its identity doesn't change on every render
  const mcqModules = useMemo(() => import.meta.glob('../data/mcqs/*Mcq.js'), []);

  // During local development you can force using local files instead of calling the backend.
  // Set this to true to skip API requests and always load from src/data/mcqs.
  const FORCE_LOCAL = true;

  // Normalize the topic id: trim, toLowerCase, replace spaces with underscores,
  // remove characters except a-z0-9 and underscore. This matches filenames like 'angularMcq.js'
  const normalizedTopicId = useMemo(() => {
    if (!topicId) return "";
    return String(topicId)
      .trim()
      .toLowerCase()
      .replaceAll(" ", "_")
      .replace(/[^a-z0-9_]/g, "");
  }, [topicId]);

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [questions, setQuestions] = useState([]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Normalize question objects to a consistent shape used by the UI.
  function normalizeQuestions(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.map((it, idx) => {
      const question = it.question ?? it.q ?? it.title ?? `Question ${idx + 1}`;
      const options = it.options ?? it.opts ?? it.answers ?? [];

      let answerIndex = null;
      if (typeof it.answerIndex === 'number') answerIndex = it.answerIndex;
      else if (typeof it.answer === 'number') answerIndex = it.answer;
      else if (typeof it.correct === 'number') answerIndex = it.correct;
      else if (typeof it.ans === 'number') answerIndex = it.ans;
      else if (typeof it.answer === 'string' && !Number.isNaN(Number(it.answer))) answerIndex = Number(it.answer);

      const explanation = it.explanation ?? it.explain ?? it.expl ?? '';

      return { ...it, question, options, answerIndex, explanation };
    });
  }

  useEffect(() => {
    let ignore = false;

    async function load() {
      setLoading(true);
      setErr("");
      setQuestions([]);
      setIdx(0);
      setSelected(null);
      setShowAnswer(false);
      setScore(0);

      let apiTried = false;
      let apiError = null;
      // If FORCE_LOCAL is true, skip the API call and go straight to local fallback.
      if (!FORCE_LOCAL) {
       try {
         // Use the normalized topic id for the API call
         apiTried = true;
         const token = localStorage.getItem("PRO_TOKEN");
         const r = await fetch(`/api/mcq/${normalizedTopicId}`, {
           method: "GET",
           credentials: "include",
           headers: {
             "Content-Type": "application/json",
             "x-pro": "true",
             ...(token ? { Authorization: `Bearer ${token}` } : {}),
           },
         });

         const txt = await r.text();
         if (r.ok) {
           try {
             const data = JSON.parse(txt);
             if (Array.isArray(data) && data.length > 0) {
               if (!ignore) {
                 setQuestions(normalizeQuestions(data));
                 setErr("");
               }
               return; // success, no need for fallback
             }
             // API returned OK but no usable data — fallthrough to fallback
             console.warn("API returned empty/non-array payload, falling back", { status: r.status, body: txt });
           } catch (jsonErr) {
             console.warn("Failed to parse JSON from API, falling back", jsonErr, txt);
             apiError = { message: jsonErr.message, body: txt, status: r.status };
           }
         } else {
           // Non-OK status (4xx/5xx) — remember the error and fall back
           console.warn("API returned non-OK status, falling back", { status: r.status, body: txt });
           apiError = { status: r.status, body: txt };
         }
       } catch (apiErr) {
         console.warn("API request failed, trying local fallback", apiErr);
         apiError = { message: apiErr.message };
       }
      } // end if !FORCE_LOCAL

      // Try local fallback from src/data/mcqs/<normalizedTopicId>Mcq.js using import.meta.glob
      try {
        const modules = mcqModules; // object: { './.../angularMcq.js': () => Promise }
        const keys = Object.keys(modules || {});
        // prefer exact filename match (case-insensitive)
        const lcNormalized = normalizedTopicId.toLowerCase();
        const compact = lcNormalized.replace(/_/g, '');
        let matchKey = keys.find((k) => k.toLowerCase().endsWith(`${lcNormalized}mcq.js`));

        // fallback: filename contains the normalized id (with or without underscores)
        if (!matchKey) matchKey = keys.find((k) => k.toLowerCase().includes(lcNormalized));
        if (!matchKey) matchKey = keys.find((k) => k.toLowerCase().includes(compact));

        // fallback: split tokens and ensure all tokens appear in filename (handles camelCase/concatenated)
        if (!matchKey) {
          const tokens = lcNormalized.split('_').filter(Boolean);
          if (tokens.length) {
            matchKey = keys.find((k) => {
              const lk = k.toLowerCase();
              return tokens.every((t) => lk.includes(t));
            });
          }
        }

        // fallback: known aliases (map topic -> filename fragments)
        if (!matchKey) {
          const aliases = {
            django: 'dijango', // project file uses 'dijangoMcq.js' (typo)
            gcp: 'googlecloud',
            system_design: 'systemdesign',
            design_patterns: 'designpatterns',
            core_java: 'corejava',
          };
          const alias = aliases[lcNormalized];
          if (alias) matchKey = keys.find((k) => k.toLowerCase().includes(alias));
        }

        if (!matchKey) throw new Error(`No local mcq file found for ${normalizedTopicId}`);

        const modLoader = modules[matchKey];
        const mod = await modLoader();

        // Support multiple export styles: default export, named export like ANGULAR_MCQ,
        // or any exported array in the module.
        let localData =
          mod?.default ||
          mod?.[`${normalizedTopicId.toUpperCase()}_MCQ`] ||
          mod?.[`${normalizedTopicId}Mcq`] ||
          mod?.ANGULAR_MCQ ||
          null;

        if (!localData) {
          const arr = Object.values(mod).find((v) => Array.isArray(v));
          if (arr) localData = arr;
        }

        if (Array.isArray(localData) && localData.length > 0) {
          if (!ignore) {
            setQuestions(normalizeQuestions(localData));
            setErr("");
          }
          return;
        }

        throw new Error("Local fallback module did not export a questions array");
      } catch (localErr) {
        // Both API and local fallback failed — set error
        let msg = localErr.message || "Failed to load questions";
        if (apiError) {
          const pieces = [];
          if (apiError.status) pieces.push(`API failed: ${apiError.status}`);
          else if (apiError.message) pieces.push(`API error: ${apiError.message}`);
          if (apiError.body) pieces.push(apiError.body.trim());
          msg = `${pieces.join(' - ')}; local fallback error: ${msg}`;
        }
        if (!ignore) setErr(msg);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, [normalizedTopicId]);

  const q = questions[idx];

  const progress = useMemo(() => {
    if (!questions.length) return 0;
    return Math.round(((idx + 1) / questions.length) * 100);
  }, [idx, questions.length]);

  const submit = () => {
    if (selected === null) return;
    setShowAnswer(true);
    if (selected === q.answerIndex) setScore((s) => s + 1);
  };

  const next = () => {
    setShowAnswer(false);
    setSelected(null);
    setIdx((i) => i + 1);
  };

  if (loading) {
    return (
      <div style={pageStyles.bg}>
        <div style={pageStyles.shell}>
          <div style={pageStyles.card}>Loading questions…</div>
        </div>
      </div>
    );
  }

  if (err) {
    return (
      <div style={pageStyles.bg}>
        <div style={pageStyles.shell}>
          <div style={pageStyles.card}>
            <h2 style={{ marginTop: 0 }}>Could not load MCQ</h2>
            <div style={{ color: "#b91c1c", marginBottom: 12 }}>{err}</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button style={pageStyles.btn} onClick={() => nav("/mcq")}>
                ← Back to Topics
              </button>
              <button style={pageStyles.btnPrimary} onClick={() => window.location.reload()}>
                Retry
              </button>
            </div>

            <div style={{ marginTop: 12, fontSize: 13, opacity: 0.75 }}>
              Expected backend route: <code>/api/mcq/{normalizedTopicId}</code> returning an array of questions.
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!q) {
    return (
      <div style={pageStyles.bg}>
        <div style={pageStyles.shell}>
          <div style={pageStyles.card}>
            <h2 style={{ marginTop: 0 }}>Completed ✅</h2>
            <div style={{ marginBottom: 10 }}>
              Score: <b>{score}</b> / <b>{questions.length}</b>
            </div>
            <button style={pageStyles.btnPrimary} onClick={() => nav("/mcq")}>
              Back to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  const correct = q.answerIndex;

  return (
    <div style={pageStyles.bg}>
      <div style={pageStyles.shell}>
        <div style={pageStyles.topRow}>
          <button style={pageStyles.btn} onClick={() => nav("/mcq")}>
            ← Topics
          </button>
          <div style={{ fontWeight: 700 }}>
            {String(normalizedTopicId).replaceAll("_", " ").toUpperCase()}
          </div>
          <div style={{ opacity: 0.7 }}>
            Score: <b>{score}</b>
          </div>
        </div>

        <div style={pageStyles.progressWrap}>
          <div style={{ opacity: 0.75 }}>
            Question {idx + 1} / {questions.length}
          </div>
          <div style={pageStyles.progressBar}>
            <div style={{ ...pageStyles.progressFill, width: `${progress}%` }} />
          </div>
        </div>

        <div style={pageStyles.card}>
          <div style={pageStyles.qTitle}>{q.question}</div>

          <div style={pageStyles.opts}>
            {q.options.map((opt, i) => {
              const isSel = selected === i;
              const isCorrect = showAnswer && i === correct;
              const isWrong = showAnswer && isSel && i !== correct;

              return (
                <button
                  key={i}
                  onClick={() => !showAnswer && setSelected(i)}
                  style={{
                    ...pageStyles.opt,
                    ...(isSel ? pageStyles.optSelected : {}),
                    ...(isCorrect ? pageStyles.optCorrect : {}),
                    ...(isWrong ? pageStyles.optWrong : {}),
                  }}
                >
                  <span style={{ fontWeight: 700, width: 28, display: "inline-block" }}>
                    {String.fromCharCode(65 + i)}.
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {!showAnswer ? (
            <div style={pageStyles.actions}>
              <button style={pageStyles.btn} onClick={() => setSelected(null)}>
                Clear
              </button>
              <button
                style={pageStyles.btnPrimary}
                disabled={selected === null}
                onClick={submit}
              >
                Submit
              </button>
            </div>
          ) : (
            <div style={pageStyles.after}>
              <div>
                {selected === correct ? "✅ Correct!" : "❌ Incorrect."} Correct answer:{" "}
                <b>{q.options[correct]}</b>
              </div>

              {q.explanation ? (
                <div style={pageStyles.explain}>
                  <b>Explanation:</b> {q.explanation}
                </div>
              ) : null}

              <button style={pageStyles.btnPrimary} onClick={next}>
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const pageStyles = {
  bg: {
    minHeight: "100vh",
    padding: "28px 18px",
    background:
      "radial-gradient(1100px 600px at 20% 0%, #f2f7ff 0%, #f7f9fc 40%, #ffffff 100%)",
  },
  shell: { maxWidth: 980, margin: "0 auto" },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  progressWrap: {
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: 14,
    padding: 12,
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    marginBottom: 12,
  },
  progressBar: {
    height: 10,
    borderRadius: 999,
    background: "#e5e7eb",
    overflow: "hidden",
    marginTop: 8,
  },
  progressFill: { height: "100%", borderRadius: 999, background: "#111827" },

  card: {
    background: "#fff",
    color: '#0f172a', // ensure dark text on white card (overrides global text-white)
    borderRadius: 18,
    boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
    padding: 18,
    border: "1px solid rgba(0,0,0,0.06)",
  },
  qTitle: { fontSize: 18, fontWeight: 800, marginBottom: 12, letterSpacing: -0.2, color: '#0f172a' },
  opts: { display: "grid", gap: 10 },
  opt: {
    textAlign: "left",
    padding: "12px 12px",
    borderRadius: 14,
    border: "1px solid rgba(0,0,0,0.10)",
    background: "#fff",
    color: '#0f172a', // explicit dark text for options
    cursor: "pointer",
    display: "flex",
    gap: 8,
    alignItems: "flex-start",
  },
  optSelected: { borderColor: "#111827", background: "#f8fafc" },
  optCorrect: { borderColor: "#16a34a", background: "#f0fdf4" },
  optWrong: { borderColor: "#dc2626", background: "#fef2f2" },

  actions: { display: "flex", justifyContent: "space-between", marginTop: 14 },
  after: { display: "grid", gap: 10, marginTop: 14 },
  explain: {
    padding: 12,
    borderRadius: 14,
    background: "#f8fafc",
    border: "1px solid rgba(0,0,0,0.06)",
    color: '#0f172a'
  },

  btn: {
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,0.12)",
    background: "#fff",
    color: '#0f172a',
    cursor: "pointer",
    fontWeight: 600,
  },
  btnPrimary: {
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid #111827",
    background: "#111827",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 700,
  },
};
