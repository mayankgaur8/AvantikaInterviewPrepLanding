import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePro } from "../auth/ProContext";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

/**
 * Interview Bot (Vite + React)
 * - Pro gate via localStorage.PRO_TOKEN
 * - Loads MCQs from src/data/mcq/*.json using import.meta.glob
 * - Random queue, configurable count
 */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function InterviewBot() {
  const nav = useNavigate();

  // quick pro-check from ProContext (will update when user upgrades)
  const { isPro } = usePro();

  // UI State
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [allQuestions, setAllQuestions] = useState([]);

  // Quiz State
  const [queue, setQueue] = useState([]); // array of indices into allQuestions
  const [pos, setPos] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(10);
  const [topic, setTopic] = useState("all"); // "all" or filename
  // Role track (Pro-only). Lists are topic name fragments used to match q._topic
  const roleTracks = {
    None: [],
    Frontend: ['react', 'angular', 'jsp', 'html', 'css'],
    Backend: ['spring', 'springboot', 'microservices', 'corejava', 'servlets', 'hibernate'],
    DevOps: ['docker', 'kubernetes', 'cicd', 'jenkins'],
    Cloud: ['aws', 'azure', 'googlecloud', 'gcp'],
    SystemDesign: ['systemdesign', 'designpatterns'],
  };
  const [roleTrack, setRoleTrack] = useState('None');

  // Track answers for review
  const [attempts, setAttempts] = useState([]); // {qid, picked, correct}

  // Load all local mcq files via import.meta.glob (Vite-friendly, eager)
  const mcqModules = useMemo(() => {
    return import.meta.glob("../data/mcqs/*Mcq.js", { eager: true });
  }, []);

  // derive topic list from filenames
  const topics = useMemo(() => {
    const keys = Object.keys(mcqModules || {});
    return keys
      .map((k) => k.split('/').pop().replace(/Mcq\.js$/, ''))
      .sort();
  }, [mcqModules]);

  // normalize questions (ensure fields question/options/answerIndex/explanation)
  function normalizeQuestions(arr, topicName) {
    if (!Array.isArray(arr)) return [];
    return arr.map((it, idx) => {
      const question = it.question ?? it.q ?? it.title ?? `Question ${idx + 1}`;
      const options = it.options ?? it.opts ?? it.answers ?? it.optionsList ?? [];

      let answerIndex = null;
      if (typeof it.answerIndex === "number") answerIndex = it.answerIndex;
      else if (typeof it.answer === "number") answerIndex = it.answer;
      else if (typeof it.correct === "number") answerIndex = it.correct;
      else if (typeof it.ans === "number") answerIndex = it.ans;
      else if (typeof it.answer === "string" && !Number.isNaN(Number(it.answer))) answerIndex = Number(it.answer);

      const explanation = it.explanation ?? it.explain ?? it.expl ?? "";

      return {
        ...it,
        id: it.id ?? `${topicName || 't'}_${idx}`,
        _topic: topicName || 'unknown',
        question,
        options,
        answerIndex,
        explanation,
      };
    });
  }

  useEffect(() => {
    // Always attempt to load local questions (don't block non-Pro users)
    let ignore = false;
    try {
      const keys = Object.keys(mcqModules || {});
      const list = [];
      for (const k of keys) {
        try {
          const mod = mcqModules[k];
          // With eager:true the module object is returned directly
          const fileName = k.split('/').pop().replace(/Mcq\.js$/, '');
          let localData = mod?.default ?? null;
          if (!localData) {
            if (mod && typeof mod === 'object') {
              localData = mod?.ANGULAR_MCQ ?? Object.values(mod).find((v) => Array.isArray(v)) ?? null;
            }
          }
          if (Array.isArray(localData)) {
            const norm = normalizeQuestions(localData, fileName);
            list.push(...norm);
          }
        } catch (e) {
          console.warn('failed to process', k, e?.message || e);
        }
      }
      if (!ignore) {
        if (!list.length) throw new Error('No local questions found.');
        setAllQuestions(list);
        setLoading(false);
      }
    } catch (e) {
      if (!ignore) {
        setErr(e.message || 'Failed to load questions');
        setLoading(false);
      }
    }

    return () => {
      ignore = true;
    };
  }, [mcqModules]);

  // Build a new quiz queue
  function startQuiz() {
    // base pool from topic selection
    let pool =
      topic === "all"
        ? allQuestions
        : allQuestions.filter((q) => q._topic === topic);

    // apply Role Track filtering for Pro users
    if (isPro && roleTrack && roleTrack !== 'None') {
      const allowed = roleTracks[roleTrack] || [];
      // keep questions whose topic matches any allowed fragment
      pool = pool.filter((q) => allowed.some((frag) => q._topic.toLowerCase().includes(frag)));
    }

    if (pool.length === 0) {
      setErr("No questions found for selected topic.");
      return;
    }

    const cappedCount = Math.max(1, Math.min(Number(count) || 10, pool.length));

    // We keep indices of "pool"? easiest: build a list of question objects directly
    // But queue currently stores indices into allQuestions; we can store question IDs instead.
    // We'll store indices into a filtered array "pool" by building "quizQuestions".
    const quizQuestions = shuffle(pool).slice(0, cappedCount);

    // Store quiz questions directly for stable navigation:
    setQueue(quizQuestions);
    setPos(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setAttempts([]);
    setErr("");
  }

  const current = queue[pos];

  function pickOption(i) {
    if (showAnswer) return;
    setSelected(i);
  }

  function reveal() {
    if (!current) return;
    if (selected === null) {
      setErr("Please select an option first.");
      return;
    }
    setErr("");
    setShowAnswer(true);

    const correct = selected === current.answerIndex;
    if (correct) setScore((s) => s + 1);

    setAttempts((a) => [
      ...a,
      { qid: current.id, picked: selected, correct, topic: current._topic },
    ]);
  }

  function next() {
    if (!queue.length) return;
    if (!showAnswer) {
      setErr("Please click “Show Answer” before moving next.");
      return;
    }
    setErr("");
    const last = pos >= queue.length - 1;
    if (last) return;

    setPos((p) => p + 1);
    setSelected(null);
    setShowAnswer(false);
  }

  function prev() {
    if (!queue.length) return;
    if (pos === 0) return;

    // When going back, restore attempt if exists
    const prevQ = queue[pos - 1];
    const attempt = attempts.find((a) => a.qid === prevQ.id);

    setPos((p) => p - 1);
    setSelected(attempt ? attempt.picked : null);
    setShowAnswer(Boolean(attempt)); // show answer if already attempted
    setErr("");
  }

  function resetAll() {
    setQueue([]);
    setPos(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setAttempts([]);
    setErr("");
  }

  // --- RESULT UI ---
  const finished = queue.length > 0 && pos === queue.length - 1 && showAnswer;

  return (
    <div style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
      <Card>
        <CardHeader>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>Interview Bot</div>
              <div style={{ color: '#666', marginTop: 6 }}>Practice randomized interview questions across topics.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700 }}>Score</div>
                <div style={{ color: '#0f172a', fontSize: 18 }}>{score}/{queue.length || 0}</div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                {isPro && <Button onClick={() => nav('/pro/resume')} variant="default" size="sm">Resume</Button>}
                <Button onClick={() => nav('/mcq')} variant="default" size="sm">MCQs</Button>
                {isPro && <Button onClick={() => nav('/pro/coding-exercise')} variant="default" size="sm">Coding Exercise</Button>}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* show a small banner for non-Pro users */}
          {!isPro ? (
            <div style={{ marginBottom: 12, padding: 10, background: '#fff7ed', borderRadius: 6 }}>
              This is the Interview Bot (demo mode). Upgrade for full features.
              <Button onClick={() => nav('/pricing')} variant="secondary" size="sm" style={{ marginLeft: 12 }}>Upgrade</Button>
            </div>
          ) : null}

          <div style={{ marginBottom: 12 }}>Questions available: <b>{allQuestions.length}</b></div>

          {err && (
            <div style={{ background: "#fff3f3", border: "1px solid #ffd0d0", padding: 12, borderRadius: 10, marginBottom: 12 }}>{err}</div>
          )}

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 18 }}>
            {/* Role Track (Pro-only) */}
            <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              Role Track:
              <select value={roleTrack} onChange={(e) => setRoleTrack(e.target.value)} style={{ padding: 8, borderRadius: 10 }} disabled={!isPro}>
                {Object.keys(roleTracks).map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>
            {!isPro && (
              <Button onClick={() => nav('/pricing')} variant="secondary" size="sm">Upgrade</Button>
            )}

            <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              Topic:
              <select value={topic} onChange={(e) => setTopic(e.target.value)} style={{ padding: 8, borderRadius: 10 }} disabled={queue.length > 0}>
                <option value="all">All</option>
                {topics.map((t) => (
                  <option key={t} value={t}>{t.toUpperCase()}</option>
                ))}
              </select>
            </label>

            <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              Questions:
              <input type="number" min="1" value={count} onChange={(e) => setCount(e.target.value)} style={{ width: 90, padding: 8, borderRadius: 10 }} disabled={queue.length > 0} />
            </label>

            {queue.length === 0 ? (
              <Button onClick={startQuiz} variant="default">Start</Button>
            ) : (
              <Button onClick={resetAll} variant="outline">New Quiz</Button>
            )}

            <div style={{ marginLeft: 'auto', fontWeight: 600 }}>{/* score shown top */}</div>
          </div>

          {/* Question card */}
          {queue.length > 0 && current ? (
            <div style={{ borderRadius: 14, padding: 16, border: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 700 }}>Q{pos + 1} of {queue.length} <span style={{ color: '#666', fontWeight: 500 }}>• {current._topic.toUpperCase()}</span></div>
                <div style={{ color: '#666' }}>ID: {current.id}</div>
              </div>

              <div style={{ marginTop: 12, fontSize: 18, fontWeight: 600 }}>{current.question}</div>

              <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
                {current.options.map((opt, i) => {
                  const isPicked = selected === i;
                  const isCorrect = i === current.answerIndex;

                  return (
                    <Button
                      key={i}
                      onClick={() => pickOption(i)}
                      disabled={showAnswer}
                      variant={showAnswer ? (isCorrect ? 'secondary' : 'ghost') : (isPicked ? 'default' : 'outline')}
                      className={`w-full text-left rounded-lg px-4 py-3 shadow-sm transition-colors ${isPicked ? 'ring-2 ring-indigo-200' : ''}`}
                    >
                      <span style={{ marginRight: 8, fontWeight: 700 }}>{String.fromCharCode(65 + i)}.</span>
                      <span>{opt}</span>
                    </Button>
                  );
                })}
              </div>

              <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
                <Button onClick={prev} variant="outline" size="sm" disabled={pos === 0}>Prev</Button>

                {!showAnswer ? (
                  <Button onClick={reveal} variant="default" size="sm">Show Answer</Button>
                ) : (
                  <Button onClick={next} variant="default" size="sm" disabled={pos >= queue.length - 1}>Next</Button>
                )}

                <div style={{ marginLeft: 'auto', color: '#666' }}>
                  {showAnswer && (<span>Correct: <b>{String.fromCharCode(65 + current.answerIndex)}</b></span>)}
                </div>
              </div>

              {showAnswer && (
                <div style={{ marginTop: 14, background: '#fafafa', border: '1px solid #eee', padding: 12, borderRadius: 12 }}>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>Explanation</div>
                  <div style={{ color: '#333' }}>{current.explanation || '—'}</div>
                </div>
              )}

              {finished && (
                <div style={{ marginTop: 16, padding: 14, borderRadius: 12, border: '1px solid #eee' }}>
                  <div style={{ fontWeight: 800, fontSize: 18 }}>Quiz Completed 🎉</div>
                  <div style={{ marginTop: 6, color: '#666' }}>Final Score: <b>{score}</b> / <b>{queue.length}</b></div>

                  <div style={{ marginTop: 10 }}>
                    <Button onClick={startQuiz} variant="default">Restart (New Random)</Button>
                    <Button onClick={resetAll} variant="outline" style={{ marginLeft: 10 }}>Change Settings</Button>
                  </div>

                  <div style={{ marginTop: 12 }}>
                    <div style={{ fontWeight: 700, marginBottom: 6 }}>Review</div>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {attempts.map((a, idx) => (
                        <li key={idx} style={{ color: a.correct ? 'green' : 'crimson' }}>{a.qid} ({a.topic}) — {a.correct ? 'Correct' : 'Wrong'}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : null}

          {queue.length === 0 && !loading && (
            <div style={{ color: '#666' }}>Select topic + count, then click <b>Start</b>.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
