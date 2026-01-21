import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AvantikaLogo from "../assets/Avantika_Interviews.png";

import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Star,
  Target,
  Trophy,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const topics = [
  { id: "corejava", label: "Core Java" },
  { id: "jsp", label: "JSP" },
  { id: "servlets", label: "Servlets" },
  { id: "ejb", label: "EJB" },
  { id: "hibernate", label: "Hibernate" },
  { id: "spring", label: "Spring" },
  { id: "springboot", label: "Spring Boot" },
  { id: "soap", label: "SOAP" },
  { id: "rest", label: "REST" },
  { id: "microservices", label: "Microservices" },
  { id: "design_patterns", label: "Design Patterns" },
  { id: "aws", label: "AWS" },
  { id: "azure", label: "Azure" },
  { id: "gcp", label: "Google Cloud" },
  { id: "react", label: "React" },
  { id: "angular", label: "Angular" },
  { id: "kafka", label: "Kafka" },
  { id: "docker", label: "Docker" },
  { id: "kubernetes", label: "Kubernetes" },
  { id: "system_design", label: "System Design" },
  {id: "devops",label:"DevOps"},
  {id: "ci_cd",label:"CI/CD"},
  {id: "python",label:"Python"},
  {id: "dijango",label:"Dijango"},
];

// ✅ For demo card on Home page (keep 1 question per topic)
const sampleMcqByTopic = {
  /* ================= CORE JAVA ================= */
  corejava: {
    tag: "Core Java • Easy",
    q: "What is the main purpose of the `final` keyword in Java?",
    options: [
      "Garbage collection",
      "Prevent changes",
      "Enable inheritance",
      "Enable reflection"
    ],
    answer: 1,
    explain:
      "`final` prevents changes: final variable can’t be reassigned, final method can’t be overridden, final class can’t be extended."
  },

  /* ================= JSP ================= */
  jsp: {
    tag: "JSP • Easy",
    q: "Which JSP element is used to include another resource at request time?",
    options: [
      "<%@ include %>",
      "<jsp:include>",
      "<jsp:forward>",
      "<jsp:useBean>"
    ],
    answer: 1,
    explain:
      "<jsp:include> includes content dynamically at request time, unlike directive include which is static."
  },

  /* ================= SERVLETS ================= */
  servlets: {
    tag: "Servlets • Easy",
    q: "Which method is called first in a servlet lifecycle?",
    options: ["service()", "doGet()", "init()", "destroy()"],
    answer: 2,
    explain:
      "init() is called once when the servlet is loaded to initialize resources."
  },

  /* ================= EJB ================= */
  ejb: {
    tag: "EJB • Medium",
    q: "Which EJB type is used for business logic with no client-specific state?",
    options: ["Stateful", "Stateless", "Singleton", "Message-driven"],
    answer: 1,
    explain:
      "Stateless session beans do not maintain client-specific state and scale better."
  },

  /* ================= HIBERNATE ================= */
  hibernate: {
    tag: "Hibernate • Medium",
    q: "Which object state is NOT valid in Hibernate?",
    options: ["Transient", "Persistent", "Detached", "Removed"],
    answer: 3,
    explain:
      "Hibernate object states are Transient, Persistent, Detached. 'Removed' is not an official state."
  },

  /* ================= SPRING ================= */
  spring: {
    tag: "Spring • Easy",
    q: "What is the default scope of a Spring bean?",
    options: ["prototype", "singleton", "request", "session"],
    answer: 1,
    explain:
      "Spring beans are singleton by default (one instance per container)."
  },

  /* ================= SPRING BOOT ================= */
  springboot: {
    tag: "Spring Boot • Easy",
    q: "Which annotation enables auto-configuration?",
    options: [
      "@EnableSpring",
      "@SpringBootApplication",
      "@AutoConfig",
      "@ComponentScan"
    ],
    answer: 1,
    explain:
      "@SpringBootApplication enables auto-configuration, component scanning, and configuration."
  },

  /* ================= SOAP ================= */
  soap: {
    tag: "SOAP • Medium",
    q: "Which format is used by SOAP messages?",
    options: ["JSON", "XML", "YAML", "Binary"],
    answer: 1,
    explain:
      "SOAP messages are strictly XML-based and follow WSDL contracts."
  },

  /* ================= REST ================= */
  rest: {
    tag: "REST • Easy",
    q: "Which HTTP method is typically idempotent?",
    options: ["POST", "PATCH", "PUT", "CONNECT"],
    answer: 2,
    explain:
      "PUT is idempotent; multiple identical requests produce the same result."
  },

  /* ================= MICROSERVICES ================= */
  microservices: {
    tag: "Microservices • Medium",
    q: "Which pattern helps handle partial failures?",
    options: ["Factory", "Adapter", "Circuit Breaker", "Decorator"],
    answer: 2,
    explain:
      "Circuit Breaker prevents cascading failures by stopping calls to failing services."
  },

  /* ================= DESIGN PATTERNS ================= */
  design_pattern: {
    tag: "Design Patterns • Easy",
    q: "Which pattern ensures only one instance of a class?",
    options: ["Factory", "Builder", "Singleton", "Prototype"],
    answer: 2,
    explain:
      "Singleton pattern restricts object creation to one instance."
  },

  /* ================= AWS ================= */
  aws: {
    tag: "AWS • Easy",
    q: "Which AWS service provides object storage?",
    options: ["EC2", "S3", "RDS", "Lambda"],
    answer: 1,
    explain:
      "Amazon S3 is an object storage service."
  },

  /* ================= AZURE ================= */
  azure: {
    tag: "Azure • Easy",
    q: "Which Azure service stores secrets securely?",
    options: ["Blob Storage", "Azure Key Vault", "Azure Monitor", "Cosmos DB"],
    answer: 1,
    explain:
      "Azure Key Vault is used for secrets, keys, and certificates."
  },

  /* ================= GCP ================= */
  gcp: {
    tag: "Google Cloud • Easy",
    q: "Which GCP service is equivalent to AWS EC2?",
    options: ["Cloud Run", "Compute Engine", "App Engine", "GKE"],
    answer: 1,
    explain:
      "Compute Engine provides virtual machines similar to EC2."
  },

  /* ================= REACT ================= */
  react: {
    tag: "React • Easy",
    q: "Which hook is used to manage local state?",
    options: ["useEffect", "useMemo", "useState", "useRef"],
    answer: 2,
    explain:
      "useState() manages local component state."
  },

  /* ================= ANGULAR ================= */
  angular: {
    tag: "Angular • Easy",
    q: "Which file defines metadata for a component?",
    options: ["module.ts", "component.ts", "service.ts", "pipe.ts"],
    answer: 1,
    explain:
      "@Component decorator in component.ts defines metadata."
  },

  /* ================= KAFKA ================= */
  kafka: {
    tag: "Kafka • Medium",
    q: "What guarantees message ordering in Kafka?",
    options: ["Topic", "Broker", "Partition", "Consumer Group"],
    answer: 2,
    explain:
      "Ordering is guaranteed only within a partition."
  },

  /* ================= DOCKER ================= */
  docker: {
    tag: "Docker • Easy",
    q: "Which file is used to build a Docker image?",
    options: ["docker.yml", "Dockerfile", "compose.yml", "image.json"],
    answer: 1,
    explain:
      "Dockerfile contains instructions to build an image."
  },

  /* ================= KUBERNETES ================= */
  kubernetes: {
    tag: "Kubernetes • Medium",
    q: "Which object exposes pods inside the cluster?",
    options: ["Ingress", "Service", "ConfigMap", "Secret"],
    answer: 1,
    explain:
      "Service provides a stable virtual IP and DNS for pods."
  },

  /* ================= SYSTEM DESIGN ================= */
  system_design: {
    tag: "System Design • Medium",
    q: "Which component reduces DB load for read-heavy systems?",
    options: ["Load Balancer", "Cache", "Message Queue", "API Gateway"],
    answer: 1,
    explain:
      "Caching (Redis/Memcached) reduces repeated DB reads."
  },

  /* ================= DEVOPS ================= */
  devops: {
    tag: "DevOps • Easy",
    q: "What is the primary goal of DevOps?",
    options: [
      "Increase code complexity",
      "Faster and reliable delivery",
      "Replace developers",
      "Eliminate testing"
    ],
    answer: 1,
    explain:
      "DevOps focuses on faster, reliable software delivery."
  },

  /* ================= CI/CD ================= */
  ci_cd: {
    tag: "CI/CD • Easy",
    q: "What does CI stand for?",
    options: [
      "Continuous Integration",
      "Code Inspection",
      "Centralized Infrastructure",
      "Cloud Integration"
    ],
    answer: 0,
    explain:
      "CI means Continuous Integration – frequent code integration with automated tests."
  },

  /* ================= PYTHON ================= */
  python: {
    tag: "Python • Easy",
    q: "Which keyword is used to define a function in Python?",
    options: ["func", "define", "def", "lambda"],
    answer: 2,
    explain:
      "`def` keyword defines a function in Python."
  },

  /* ================= DJANGO ================= */
  django: {
    tag: "Django • Medium",
    q: "Which file maps URLs to views in Django?",
    options: ["views.py", "models.py", "urls.py", "settings.py"],
    answer: 2,
    explain:
      "urls.py maps URLs to view functions or classes."
  },

};

// fallback so Home never crashes if a topic has no sample question
const fallbackMcq = {
  tag: "Demo • Easy",
  q: "Select a topic to see a sample question.",
  options: ["OK"],
  answer: 0,
  explain: "Click any topic on the right to open its full questions page.",
};

const demandSalaryData = [
  { year: "2026", demand: 62, salary: 55 },
  { year: "2027", demand: 68, salary: 60 },
  { year: "2028", demand: 74, salary: 66 },
  { year: "2029", demand: 81, salary: 72 },
  { year: "2030", demand: 87, salary: 78 },
];

const learningHours = [
  { week: "W1", hours: 6 },
  { week: "W2", hours: 7 },
  { week: "W3", hours: 8 },
  { week: "W4", hours: 9 },
  { week: "W5", hours: 8 },
  { week: "W6", hours: 10 },
];

const roleTracks = {
  senior: {
    title: "Senior Engineer Track",
    bullets: ["Deepen Spring Boot + microservices", "Improve testing & observability", "Own features end-to-end"],
  },
  lead: {
    title: "Lead Engineer Track",
    bullets: ["Architecture + tradeoffs", "Mentoring + delivery KPIs", "Cost/performance optimization"],
  },
  principal: {
    title: "Principal Engineer Track",
    bullets: ["Org-wide design reviews", "Platform reliability", "Tech strategy + roadmap influence"],
  },
};

const pricing = [
  {
    name: "Starter",
    price: "Free",
    desc: "Try MCQs + a short roadmap.",
    features: ["20 MCQs", "1 role roadmap", "Weekly checklist"],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "₹999/mo",
    desc: "Full Q&A + mock interviews.",
    features: ["Unlimited MCQs", "Interview Bot", "Role tracks", "Progress analytics"],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Career+",
    price: "₹4,999",
    desc: "Guided prep with templates + CV/ATS help.",
    features: ["Everything in Pro", "Resume templates", "System design drills", "Monthly review"],
    cta: "Upgrade",
  },
];

const testimonials = [
  { name: "Aarav", role: "SDE2 → Senior", text: "The MCQ + explanations are crisp. Mock rounds felt real." },
  { name: "Nisha", role: "Frontend Lead", text: "Loved the roadmap + progress tracking. Helped me stay consistent." },
  { name: "Kartik", role: "Java Microservices", text: "System design + Spring topics were perfectly aligned to interviews." },
];

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-7">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-neutral-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const [topic, setTopic] = useState("core_java");
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [role, setRole] = useState("senior");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mcq = sampleMcqByTopic[topic] ?? fallbackMcq;
  const track = roleTracks[role];

  const accuracy = useMemo(() => {
    if (score.total === 0) return 0;
    return Math.round((score.correct / score.total) * 100);
  }, [score]);

  function pickOption(i) {
    if (selected !== null) return;
    setSelected(i);
    const isCorrect = i === mcq.answer;
    setScore((s) => ({
      correct: s.correct + (isCorrect ? 1 : 0),
      total: s.total + 1,
    }));
  }

  function nextQuestion() {
    setSelected(null);
    const idx = topics.findIndex((t) => t.id === topic);
    const next = topics[(idx + 1) % topics.length].id;
    setTopic(next);
  }

  function handleFreePlan() {
    if (!email.trim()) return;
    setSubmitted(true);
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-brand-gradient text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10">
              <img
                src={AvantikaLogo}
                alt="Avantika Interviews Logo"
                className="h-full w-full rounded-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">AvantikaInterviewPrep</div>
              <div className="text-xs text-neutral-500">Prep smarter. Interview faster.</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })} className="bg-indigo-600/95 text-white hover:bg-indigo-500 focus:ring-indigo-300 shadow-md">
              Live Demo <ChevronRight className="ml-1 h-4 w-4" />
            </Button>

            <Button variant="outline" onClick={() => document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" })} className="bg-emerald-500 text-white hover:bg-emerald-400 focus:ring-emerald-300 shadow-sm">
              Roadmap
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  Get Interview Plan <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get your personalized plan</DialogTitle>
                </DialogHeader>
                <p className="text-sm text-neutral-600">
                  Enter your email — we’ll send a 30-day plan + role roadmap.
                </p>
                <div className="flex gap-2">
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                  <Button onClick={handleFreePlan}>Send</Button>
                </div>
                {submitted && (
                  <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-800">
                    <CheckCircle2 className="h-4 w-4" />
                    Sent! (Demo) You can wire this to your backend later.
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* LEFT */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white/10 text-white border border-white/15 rounded-full">🛡️ Job-ready prep</Badge>
              <Badge className="bg-white/10 text-white border border-white/15 rounded-full">⏱️ 30–45 day plans</Badge>
              <Badge className="bg-white/10 text-white border border-white/15 rounded-full">✨ Interview Bot</Badge>
            </div>

            <Badge variant="secondary" className="mb-3">
              🚀 2026–2030 Skills + Interview Prep
            </Badge>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Crack Senior/Lead Interviews with A Structured Prep System.
            </h1>

            <p className="mt-4 max-w-xl text-white/80">
              AvantikaInterviewPrep helps you master Core Java, Spring Boot, Microservices, Cloud, and System Design — with interactive practice, mock interviews, and progress insights.
            </p>

            <div className="mt-7 flex w-full max-w-xl items-center gap-2 rounded-2xl bg-white/10 p-3 border border-white/15 backdrop-blur">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for free roadmap"
                className="bg-transparent text-white placeholder:text-white/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button onClick={handleFreePlan} className="rounded-xl bg-black text-white hover:bg-black/90 px-5 py-2 font-semibold shadow-lg">
                Get Free Plan <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {submitted && (
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 p-3 text-sm text-white">
                <CheckCircle2 className="h-4 w-4" />
                Sent! (Demo) We’ll email your free roadmap.
              </div>
            )}

            <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <div className="text-xl font-bold">20 min</div>
                <div className="text-xs text-white/70">Practice daily</div>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <div className="text-xl font-bold">Unlimited</div>
                <div className="text-xs text-white/70">Mock rounds</div>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <div className="text-xl font-bold">Basics → Advanced</div>
                <div className="text-xs text-white/70">Interview ready</div>
              </div>
            </div>

            <div className="mt-3 text-xs text-white/70">🔒 We never spam. Unsubscribe anytime.</div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="bg-white/10 text-white border border-white/15 backdrop-blur rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2">
                  <Badge className="bg-white/10 text-white border border-white/15 rounded-full">Live Preview</Badge>

                  <div className="flex items-center gap-2">
                    <Badge className="bg-white/10 text-white border border-white/15 rounded-full">Senior Track</Badge>
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger className="w-[140px] bg-white/10 text-white border-white/15">
                        <SelectValue placeholder="Senior" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="lead">Lead</SelectItem>
                        <SelectItem value="principal">Principal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardTitle>

                <div className="mt-3 text-2xl font-bold">Your dashboard, in one place</div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                    <div className="text-xs text-white/70">Accuracy</div>
                    <div className="mt-2 text-2xl font-bold">{accuracy}%</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                    <div className="text-xs text-white/70">Attempts</div>
                    <div className="mt-2 text-2xl font-bold">{score.total}</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                    <div className="text-xs text-white/70">Streak</div>
                    <div className="mt-2 text-2xl font-bold">3 days</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Weekly practice plan</div>
                    <Badge className="bg-white/10 text-white border border-white/15 rounded-full">Auto-generated</Badge>
                  </div>

                  <div className="mt-3 h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={learningHours}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="hours" strokeWidth={3} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}>
                    Try live MCQ <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>

                  <Button variant="outline" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
                    View pricing
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 text-xs text-white/80">
                  <span className="flex items-center gap-1"><Trophy className="h-4 w-4" /> Mock interviews</span>
                  <span className="flex items-center gap-1"><Target className="h-4 w-4" /> Role tracks</span>
                  <span className="flex items-center gap-1"><GraduationCap className="h-4 w-4" /> 30-day challenge</span>
                </div>

                {/* ✅ Optional: button to open full topic page */}
                <div className="mt-2">
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => navigate(`/topic/${topic}`)}
                  >
                    Open full questions for: {topics.find((t) => t.id === topic)?.label}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Demo */}
      <Section
        id="demo"
        title="Try a sample MCQ"
        subtitle="Pick a topic, answer once, and see instant feedback + your accuracy score."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{mcq.tag}</span>
                <Badge variant="secondary">Accuracy: {accuracy}%</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold">{mcq.q}</div>

              <div className="mt-4 grid gap-2">
                {mcq.options.map((opt, i) => {
                  const isChosen = selected === i;
                  const isRight = i === mcq.answer;
                  const show = selected !== null;

                  const state =
                    show && isRight
                      ? "border-emerald-300 bg-emerald-50"
                      : show && isChosen && !isRight
                      ? "border-rose-300 bg-rose-50"
                      : "border-neutral-200 bg-white hover:bg-neutral-50";

                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => pickOption(i)}
                      className={`w-full rounded-xl border p-3 text-left text-sm transition ${state}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-700">
                  <div className="font-semibold">
                    {selected === mcq.answer ? "✅ Correct" : "❌ Not quite"}
                  </div>
                  <div className="mt-1">{mcq.explain}</div>
                </div>
              )}

              <div className="mt-4 flex gap-2">
                <Button variant="secondary" onClick={nextQuestion}>
                  Next question
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelected(null);
                    setScore({ correct: 0, total: 0 });
                  }}
                >
                  Reset score
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Choose topic</CardTitle>
            </CardHeader>
            <CardContent>
              {/* ✅ Clicking a topic opens /topic/:topicId page */}
              <Tabs
                value={topic}
                onValueChange={(value) => {
                  setSelected(null);
                  setTopic(value);
                  setScore({ correct: 0, total: 0 });
                  navigate(`/topic/${value}`);
                }}
                className="w-full"
              >
                <TabsList className="grid h-auto w-full grid-cols-1 gap-1 p-1">
                  {topics.map((t) => (
                    <TabsTrigger key={t.id} value={t.id} className="justify-start">
                      {t.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value={topic}>
                  <div className="mt-3 text-sm text-neutral-600">
                    Tip: Click any topic to open full interview Q&A (Basics → Advanced).
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Roadmap */}
      <Section
        id="roadmap"
        title="Role-based roadmap"
        subtitle="Select your target level and see what to prioritize for high-impact interviews."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Target role</span>
                <Badge variant="secondary">Interactive</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role track" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="senior">Senior</SelectItem>
                    <SelectItem value="lead">Lead</SelectItem>
                    <SelectItem value="principal">Principal</SelectItem>
                  </SelectContent>
                </Select>

                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="text-sm font-semibold">{track.title}</div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                    {track.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-neutral-200 p-4">
                  <div className="text-sm font-semibold">6-week consistency plan</div>
                  <div className="mt-3 h-44 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={learningHours}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="hours" strokeWidth={3} fillOpacity={0.2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-2 text-xs text-neutral-600">
                    Aim for 6–10 focused hours/week: MCQs + 2 projects + system design practice.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>High-growth skill combinations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {[
                  { t: "Java + Spring Boot + Kubernetes", d: "Cloud-native microservices, scaling, reliability." },
                  { t: "React + TypeScript + Design Systems", d: "Modern UI engineering + performance." },
                  { t: "Kafka + Streams + Observability", d: "Event-driven systems + troubleshooting." },
                  { t: "Security + API Governance", d: "Shift-left security for enterprises." },
                ].map((x) => (
                  <div key={x.t} className="rounded-xl border border-neutral-200 p-4">
                    <div className="text-sm font-semibold">{x.t}</div>
                    <div className="mt-1 text-sm text-neutral-600">{x.d}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" title="Pricing" subtitle="Simple plans that match your learning pace.">
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((p) => (
            <Card key={p.name} className={p.highlight ? "border-neutral-950 shadow-md" : ""}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{p.name}</span>
                  {p.highlight && <Badge>Most Popular</Badge>}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold">{p.price}</div>
                <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {/*<Button className="mt-5 w-full" variant={p.highlight ? "default" : "secondary"}>
                  {p.cta}
                </Button>*/}
   <Button
  className="mt-5 w-full"
  variant={p.highlight ? "default" : "secondary"}
  onClick={() => {
    if (p.name === "Pro") navigate("/pricing", { state: { plan: "PRO" } });
    else if (p.name === "Career+") navigate("/pricing", { state: { plan: "CAREER" } });
    else navigate("/topic/corejava"); // or any free flow you want
  }}
>
  {p.cta}
</Button>


              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section id="reviews" title="What learners say" subtitle="People who used structured prep to grow faster.">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{t.name}</span>
                  <span className="flex items-center gap-1 text-sm text-neutral-500">
                    <Star className="h-4 w-4" /> 5.0
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-neutral-600">{t.role}</div>
                <div className="mt-3 text-sm">{t.text}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ" subtitle="Quick answers before you start.">
        <Card>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="a">
                <AccordionTrigger>Is this suitable for 10+ years experience?</AccordionTrigger>
                <AccordionContent>
                  Yes — role tracks (Senior/Lead/Principal) focus on architecture, tradeoffs, and leadership signals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Can I add my own questions?</AccordionTrigger>
                <AccordionContent>
                  Yes. Store MCQs/Q&A in JSON or a database and render them dynamically.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="c">
                <AccordionTrigger>How do I connect the email capture to backend?</AccordionTrigger>
                <AccordionContent>
                  Add an API endpoint (Node/Spring) and call fetch() from the dialog submit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-200/60 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-neutral-600">© {new Date().getFullYear()} AvantikaInterviewPrep</div>

          <div className="flex gap-2">
            <Button
              variant="default"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-black text-white hover:bg-black/90 hover:text-white"
            >
              Back to top
            </Button>

            <Button
              variant="default"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-black text-white hover:bg-black/90 hover:text-white"
            >
              Pricing
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
