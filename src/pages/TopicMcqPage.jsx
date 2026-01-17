import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { MCQ_BY_TOPIC } from "../data/mcqRegistry";

const normalizeTopicId = (id = "") => {
  const raw = String(id).toLowerCase();
  const map = { corejava: "core_java", "core-java": "core_java", dijango: "django" };
  return map[raw] || raw;
};

export default function TopicMcqPage() {
  const { topicId: paramTopicId } = useParams();
  const topicId = normalizeTopicId(paramTopicId);

  const [level, setLevel] = useState("All");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplain, setShowExplain] = useState(false);

  const all = MCQ_BY_TOPIC?.[topicId] || [];

  const filtered = useMemo(() => {
    if (level === "All") return all;
    return all.filter((m) => m.level === level);
  }, [all, level]);

  const current = filtered[index];

  function onSelect(i) {
    setSelected(i);
    setShowExplain(true);
  }

  function next() {
    setSelected(null);
    setShowExplain(false);
    setIndex((x) => (x + 1) % filtered.length);
  }

  if (!all.length) {
    return <div className="p-8 text-white">No MCQs found for {topicId}</div>;
  }

  return (
    <div className="min-h-screen bg-brand-gradient text-white">
      <div className="mx-auto max-w-4xl px-4 py-8 space-y-4">
        <h1 className="text-3xl font-semibold">{topicId.toUpperCase()} • MCQs</h1>

        <div className="flex gap-2">
          {["All","Basic","Intermediate","Advanced"].map((l) => (
            <button
              key={l}
              onClick={() => { setLevel(l); setIndex(0); setSelected(null); setShowExplain(false); }}
              className={`px-4 py-2 rounded-xl ${level===l ? "bg-white text-purple-700" : "bg-white/10"}`}
            >
              {l}
            </button>
          ))}
          <div className="ml-auto bg-white/10 px-3 py-2 rounded-xl">
            {index + 1} / {filtered.length}
          </div>
        </div>

        <div className="rounded-3xl bg-white/10 border border-white/15 p-6">
          <div className="text-sm text-white/80">{current.tag}</div>
          <div className="mt-2 text-lg font-semibold">{current.q}</div>

          <div className="mt-4 space-y-2">
            {current.options.map((opt, i) => {
              const isCorrect = i === current.answer;
              const isSelected = i === selected;

              return (
                <button
                  key={i}
                  disabled={selected !== null}
                  onClick={() => onSelect(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl border border-white/15
                    ${isSelected ? "bg-black/40" : "bg-white/10 hover:bg-white/15"}
                    ${showExplain && isCorrect ? "ring-2 ring-white/60" : ""}
                  `}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {showExplain && (
            <div className="mt-4 rounded-2xl bg-black/40 p-4 border border-white/15">
              <div className="font-semibold">Explanation</div>
              <div className="mt-1 text-white/90">{current.explain}</div>
            </div>
          )}

          <div className="mt-4 flex gap-2">
            <button
              onClick={next}
              disabled={selected === null}
              className={`px-4 py-2 rounded-xl ${
                selected === null ? "bg-white/20 text-white/60" : "bg-white text-purple-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
