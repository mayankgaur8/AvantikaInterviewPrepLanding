import { useEffect, useMemo, useState } from "react";

const tabs = [
  { id: "basic", label: "Basic" },
  { id: "skills", label: "Skills" },
  { id: "exp", label: "Experience" },
  { id: "edu", label: "Education" },
];

export default function ResumeBuilder() {
  const [tab, setTab] = useState("basic");
  const [dark, setDark] = useState(false);

  // example form state (replace with your existing state)
  const [form, setForm] = useState({
    name: "",
    title: "",
    summary: "",
    skills: "",
    experience: [],
    education: [],
  });

  const [saveState, setSaveState] = useState("Saved"); // "Saving..." | "Saved"
  const completion = useMemo(() => {
    let score = 0;
    if (form.name.trim()) score += 20;
    if (form.title.trim()) score += 15;
    if (form.summary.trim()) score += 25;
    if (form.skills.trim()) score += 15;
    if (form.experience.length) score += 15;
    if (form.education.length) score += 10;
    return Math.min(100, score);
  }, [form]);

  // auto-save UI simulation (plug your own persistence)
  useEffect(() => {
    setSaveState("Saving...");
    const t = setTimeout(() => setSaveState("Saved"), 600);
    return () => clearTimeout(t);
  }, [form]);

  const themeClass = dark
    ? "bg-slate-950 text-slate-100"
    : "bg-slate-50 text-slate-900";

  return (
    <div className={`${themeClass} min-h-screen`}>
      {/* Background gradient */}
      <div
        className={`absolute inset-0 -z-10 ${
          dark
            ? "bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.18),transparent_55%)]"
            : "bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_60%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_55%)]"
        }`}
      />

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Resume Builder <span className="text-indigo-500">(Pro)</span>
            </h1>
            <p className="text-sm opacity-80">
              Build a polished resume & cover letter with live preview.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`text-xs px-2 py-1 rounded-full border ${
                dark
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
              }`}
            >
              {saveState}
            </span>

            <button
              onClick={() => setDark((v) => !v)}
              className={`text-sm px-3 py-2 rounded-xl border transition ${
                dark
                  ? "border-slate-700 bg-slate-900 hover:bg-slate-800"
                  : "border-slate-200 bg-white hover:bg-slate-100"
              }`}
            >
              {dark ? "🌙 Dark" : "☀️ Light"}
            </button>

            <button className="text-sm px-3 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Upload Resume
            </button>
            <button className="text-sm px-3 py-2 rounded-xl border border-indigo-300 text-indigo-600 hover:bg-indigo-50 transition">
              Upload Cover Letter
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-xs opacity-80">
            <span>Profile completeness</span>
            <span>{completion}%</span>
          </div>
          <div className={`mt-2 h-2 rounded-full ${dark ? "bg-slate-800" : "bg-slate-200"}`}>
            <div
              className="h-2 rounded-full bg-indigo-600 transition-all"
              style={{ width: `${completion}%` }}
            />
          </div>
        </div>

        {/* Main grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: Form */}
          <div
            className={`rounded-2xl border p-4 md:p-6 ${
              dark ? "border-slate-800 bg-slate-900/60" : "border-slate-200 bg-white/70"
            } backdrop-blur`}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`px-3 py-2 rounded-xl text-sm transition border ${
                    tab === t.id
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : dark
                      ? "bg-slate-900 border-slate-700 hover:bg-slate-800"
                      : "bg-white border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-5">
              {tab === "basic" && (
                <>
                  <Field
                    dark={dark}
                    label="Name"
                    value={form.name}
                    placeholder="e.g., Mayank Gaur"
                    onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                  />
                  <Field
                    dark={dark}
                    label="Title"
                    value={form.title}
                    placeholder="e.g., Senior Full-Stack Developer (Java + React)"
                    onChange={(v) => setForm((p) => ({ ...p, title: v }))}
                  />
                  <TextArea
                    dark={dark}
                    label="Summary"
                    value={form.summary}
                    placeholder="Write a 3–5 line impact summary..."
                    onChange={(v) => setForm((p) => ({ ...p, summary: v }))}
                  />
                </>
              )}

              {tab === "skills" && (
                <TextArea
                  dark={dark}
                  label="Skills (comma separated)"
                  value={form.skills}
                  placeholder="Java, Spring Boot, Microservices, Kafka, React, Azure AKS..."
                  onChange={(v) => setForm((p) => ({ ...p, skills: v }))}
                />
              )}

              {tab === "exp" && (
                <EmptySection
                  dark={dark}
                  title="Experience"
                  subtitle="Add your roles with impact bullets (STAR format)."
                  buttonText="Add Experience"
                  onAdd={() => alert("Open your existing Add Experience modal")}
                />
              )}

              {tab === "edu" && (
                <EmptySection
                  dark={dark}
                  title="Education"
                  subtitle="Add MCA, certifications, and key courses."
                  buttonText="Add Education"
                  onAdd={() => alert("Open your existing Add Education modal")}
                />
              )}
            </div>
          </div>

          {/* Right: Preview (sticky) */}
          <div className="lg:sticky lg:top-6 h-fit">
            <div
              className={`rounded-2xl border p-4 md:p-6 ${
                dark ? "border-slate-800 bg-slate-900/60" : "border-slate-200 bg-white/70"
              } backdrop-blur`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Preview</h2>
                <span className="text-xs opacity-70">Live</span>
              </div>

              <div className={`mt-4 rounded-xl border p-4 ${dark ? "border-slate-800" : "border-slate-200"}`}>
                <div className="text-lg font-semibold">
                  {form.name || "Your name"}
                </div>
                <div className="text-sm opacity-80">
                  {form.title || "Your title"}
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <SectionTitle>Summary</SectionTitle>
                  <p className="opacity-90">
                    {form.summary || "Your professional summary will appear here..."}
                  </p>

                  <SectionTitle>Skills</SectionTitle>
                  <div className="flex flex-wrap gap-2">
                    {(form.skills ? form.skills.split(",") : [])
                      .map((s) => s.trim())
                      .filter(Boolean)
                      .slice(0, 16)
                      .map((s) => (
                        <span
                          key={s}
                          className={`text-xs px-2 py-1 rounded-full border ${
                            dark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
                          }`}
                        >
                          {s}
                        </span>
                      ))}
                    {!form.skills && (
                      <span className="text-xs opacity-70">Add skills to see tags...</span>
                    )}
                  </div>

                  <SectionTitle>Experience</SectionTitle>
                  <p className="opacity-70">Add experience to preview.</p>

                  <SectionTitle>Education</SectionTitle>
                  <p className="opacity-70">Add education to preview.</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button className="px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 transition text-sm">
                  Print / Save PDF
                </button>
                <button className="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition text-sm">
                  Download PDF
                </button>
              </div>
            </div>

            {/* Tips card */}
            <div
              className={`mt-4 rounded-2xl border p-4 ${
                dark ? "border-slate-800 bg-slate-900/60" : "border-slate-200 bg-white/70"
              } backdrop-blur`}
            >
              <div className="text-sm font-semibold">Tips</div>
              <ul className="mt-2 text-sm opacity-80 list-disc pl-5 space-y-1">
                <li>Keep summary 3–5 lines, impact-driven.</li>
                <li>Use numbers: latency %, cost $, throughput, users.</li>
                <li>For experience bullets: Action + Tool + Result.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, placeholder, onChange, dark }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 w-full rounded-xl border px-3 py-2 outline-none transition ${
          dark
            ? "border-slate-700 bg-slate-950 focus:border-indigo-500"
            : "border-slate-200 bg-white focus:border-indigo-500"
        }`}
      />
    </div>
  );
}

function TextArea({ label, value, placeholder, onChange, dark }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        className={`mt-2 w-full rounded-xl border px-3 py-2 outline-none transition ${
          dark
            ? "border-slate-700 bg-slate-950 focus:border-indigo-500"
            : "border-slate-200 bg-white focus:border-indigo-500"
        }`}
      />
    </div>
  );
}

function SectionTitle({ children }) {
  return <div className="font-semibold mt-2">{children}</div>;
}

function EmptySection({ title, subtitle, buttonText, onAdd, dark }) {
  return (
    <div className={`rounded-xl border p-4 ${dark ? "border-slate-800" : "border-slate-200"}`}>
      <div className="font-semibold">{title}</div>
      <div className="text-sm opacity-75 mt-1">{subtitle}</div>
      <button
        onClick={onAdd}
        className="mt-3 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition text-sm"
      >
        {buttonText}
      </button>
    </div>
  );
}
