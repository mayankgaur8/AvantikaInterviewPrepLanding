import React, { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { TOPIC_QUESTIONS } from "../data/topicRegistry";
//import { SERVLET_QUESTIONS } from "./servletQuestions"; // ✅ IMPORTANT
//import { QUESTIONS_BY_TOPIC } from "../data/questions";
import { topics, qaBank } from "../data/questionBank";
//import {JSP_QUESTIONS} from "../data/jspquestions";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// ---------- helpers ----------
const prettyTitle = {
  core_java: "Core Java",
  jsp: "JSP",
  servlets: "Servlets",
  ejb: "EJB",
  hibernate: "Hibernate",
  spring: "Spring",
  springboot: "Spring Boot",
  soap: "SOAP",
  rest: "REST",
  microservices: "Microservices",
  design_patterns: "Design Patterns",
  aws: "AWS",
  azure: "Azure",
  gcp: "Google Cloud",
  react: "React",
  angular: "Angular",
  kafka: "Kafka",
  docker: "Docker",
  kubernetes: "Kubernetes",
  system_design: "System Design",
  devops: "DevOps",
  cicd: "CI/CD",
  python: "Python",
  django: "Django",
};

function normalizeTopicId(id = "") {
  const raw = String(id || "").toLowerCase();
  const map = {
    corejava: "core_java",
    "core-java": "core_java",
    "django": "django",     // ✅ add this
    "dijango": "django",

  };
  return map[raw] || raw;
}

export default function TopicPage() {
  const navigate = useNavigate();
  const params = useParams();
  const topicId = normalizeTopicId(params.topicId);

  const title = prettyTitle[topicId] || topicId;

  // --- data sources ---
  //const allQuestions = TOPIC_QUESTIONS?.[topicId] || [];
  console.log("topicId:", topicId, "rawQuestions:", TOPIC_QUESTIONS?.[topicId]);

  const rawQuestions = TOPIC_QUESTIONS?.[topicId];
  const topicMeta = topics?.find((t) => t.id === topicId);
  const topicData = qaBank?.[topicId]; // accordion list

  // --- interactive states ---
  const [level, setLevel] = useState("All"); // All | Basic | Intermediate | Advanced
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // --- list states ---
  const [search, setSearch] = useState("");

  // filter interactive questions by level
  const allQuestions = Array.isArray(rawQuestions)
  ? rawQuestions
  : (rawQuestions?.[topicId] ?? []);

  const filtered = useMemo(() => {
    if (level === "All") return allQuestions;
    return allQuestions.filter((q) => q.level === level);
  }, [allQuestions, level]);

  // keep index safe when filter changes
  useEffect(() => {
    setIndex(0);
    setShowAnswer(false);
  }, [level, topicId]);

  const current = filtered[index];

  function resetToStart(nextLevel) {
    setLevel(nextLevel);
    setIndex(0);
    setShowAnswer(false);
  }

  function onShowAnswer() {
    setShowAnswer(true);
  }

  function onNext() {
    if (!filtered.length) return;
    setShowAnswer(false);
    setIndex((i) => (i + 1) % filtered.length);
  }

  function onPrev() {
    if (!filtered.length) return;
    setShowAnswer(false);
    setIndex((i) => (i - 1 + filtered.length) % filtered.length);
  }

  // ---- Topic not found (both data missing) ----
  if (!topicMeta && allQuestions.length === 0 && !topicData) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <Card>
            <CardHeader>
              <CardTitle>Topic not found</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-neutral-600">
                No data found for: <b>{topicId}</b>
              </p>
              <Link to="/">
                <Button className="bg-black text-white hover:bg-black/90">
                  Go Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ---- list for accordion (qaBank) ----
  const list = useMemo(() => {
    if (!topicData) return [];
    const arr =
      level === "All"
        ? [
            ...(topicData.Basic || []),
            ...(topicData.Intermediate || []),
            ...(topicData.Advanced || []),
          ]
        : topicData[level] || [];

    const s = search.trim().toLowerCase();
    if (!s) return arr;

    return arr.filter(
      (x) =>
        String(x.q || "").toLowerCase().includes(s) ||
        String(x.a || "").toLowerCase().includes(s)
    );
  }, [topicData, level, search]);

  const progressText = filtered.length ? `${index + 1} / ${filtered.length}` : "0 / 0";

  return (
    <div className="min-h-screen bg-brand-gradient text-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold">{topicMeta?.label || title}</h1>
            <p className="mt-1 text-sm text-white/80">
              Interview Questions & Answers • Basic → Advanced
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className="bg-white/10 text-white border border-white/15">Curated</Badge>
              <Badge className="bg-white/10 text-white border border-white/15">Searchable</Badge>
              <Badge className="bg-white/10 text-white border border-white/15">Interactive</Badge>
            </div>
          </div>

          <Button className="bg-black text-white hover:bg-black/90" onClick={() => navigate("/")}>
            ← Back
          </Button>
        </div>

        {/* Level filter for BOTH interactive + list */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["All", "Basic", "Intermediate", "Advanced"].map((l) => (
            <Button
              key={l}
              onClick={() => resetToStart(l)}
              className={`rounded-xl px-4 py-2 font-semibold transition-all duration-150 ${
                level === l
                  ? l === 'All'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg hover:opacity-95'
                    : 'bg-white text-purple-700 hover:bg-white/95'
                  : 'bg-white/5 text-white border border-white/20 hover:bg-white/10'
              }`}
            >
              {l}
            </Button>
          ))}

          <div className="ml-auto flex items-center gap-2">
            <Badge className="bg-white/10 text-white border border-white/15">{progressText}</Badge>
          </div>
        </div>

        {/* ===== Interactive 1-by-1 Card ===== */}
        <Card className="mt-6 bg-white/10 text-white border border-white/15 backdrop-blur rounded-3xl overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Interactive Practice</span>
              <span className="text-sm text-white/80">
                {filtered.length ? `${current?.level || ""}` : "No questions"}
              </span>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {!filtered.length ? (
              <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
                <div className="text-sm text-white/80">
                </div>
              </div>
            ) : (
              <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
                <div className="text-lg font-semibold">{current.q}</div>

                {!showAnswer ? (
                  <div className="mt-4">
                    <Button
                      onClick={onShowAnswer}
                      className="rounded-xl px-4 py-2 font-semibold shadow-md transition-all"
                      // purple gradient primary CTA so it stands out on the background
                      style={{ background: 'linear-gradient(90deg,#7c3aed,#4f46e5)', color: '#fff' }}
                    >
                      Show Answer
                    </Button>
                  </div>
                ) : (
                  <div className="mt-4 rounded-2xl bg-black/30 border border-white/15 p-4">
                    <div className="text-sm font-semibold">Answer</div>
                   {showAnswer && (
  <div className="mt-4 space-y-4 rounded-2xl bg-black/30 border border-white/15 p-4">
    {/* Summary */}
    <div>
      <div className="text-sm font-semibold">Answer</div>
      <div className="mt-2 text-sm text-white/90 leading-relaxed">
        {current.answer?.summary ?? current.a}
      </div>
    </div>

    {/* Differences table */}
    {current.answer?.table && (
      <div className="space-y-2">
        <div className="text-sm font-semibold">{current.answer.table.title}</div>
        <div className="overflow-x-auto rounded-xl border border-white/15">
          <table className="w-full text-sm">
            <thead className="bg-white/10">
              <tr>
                {current.answer.table.headers.map((h) => (
                  <th key={h} className="px-3 py-2 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {current.answer.table.rows.map((row, idx) => (
                <tr key={idx} className="border-t border-white/10">
                  {row.map((cell, cidx) => (
                    <td key={cidx} className="px-3 py-2 text-white/90 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}

    {/* Code block */}
    {current.answer?.code && (
      <div className="space-y-2">
        <div className="text-sm font-semibold">{current.answer.codeTitle ?? "Code"}</div>
        <pre className="overflow-x-auto rounded-xl border border-white/15 bg-black/60 p-4 text-xs leading-relaxed">
          <code>{current.answer.code}</code>
        </pre>
      </div>
    )}
  </div>
)}

                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button onClick={onPrev} className="bg-black text-white hover:bg-black/90 rounded-xl">
                    Prev
                  </Button>

                  <Button
                    onClick={onNext}
                    disabled={!showAnswer}
                    className={`rounded-xl ${
                      showAnswer
                        ? "bg-white text-purple-700 hover:bg-white/95"
                        : "bg-white/20 text-white/60 cursor-not-allowed"
                    }`}
                  >
                    Next Question
                  </Button>

                  <Button
                    onClick={() => {
                      setIndex(0);
                      setShowAnswer(false);
                    }}
                    className="bg-white/10 text-white hover:bg-white/15 rounded-xl"
                  >
                    Restart
                  </Button>
                </div>

                {!showAnswer && (
                  <div className="mt-2 text-xs text-white/70">
                    Tip: Show answer to unlock “Next Question”.
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* ===== Search + Accordion List (qaBank) ===== */}
        <Card className="mt-6 bg-white text-neutral-900">
          <CardContent className="pt-6">
            <div className="grid gap-3 md:grid-cols-3">
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions... (e.g., JVM, HashMap, SOLID)"
                className="md:col-span-2"
              />

              <Select value={level} onValueChange={(v) => resetToStart(v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Basic">Basic</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-white text-neutral-900">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Questions List</span>
              <Badge variant="secondary">{list.length} items</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!topicData || list.length === 0 ? (
              <div className="rounded-xl border bg-white p-4 text-sm text-neutral-700">
                No questions found in <b>qaBank</b> for this topic/level. Add data in
                <b> questionBank.js</b>.
              </div>
            ) : (
              <Accordion type="single" collapsible className="w-full">
                {list.map((item, idx) => (
                  <AccordionItem key={item.id || idx} value={`${idx}`}>
                    <AccordionTrigger className="text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="rounded-xl bg-neutral-50 p-3 text-sm text-neutral-800">
                        {item.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
