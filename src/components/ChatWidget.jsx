import { useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_MESSAGES = [
  {
    role: "bot",
    text: "Hi! I’m Avantika’s Interview Prep assistant. Ask me about plans, pricing, or how to get started.",
  },
];

function getOrCreateSessionId() {
  const key = "df_session_id";
  const existing = window.localStorage.getItem(key);
  if (existing) return existing;
  const next = (window.crypto?.randomUUID?.() || `session-${Date.now()}`);
  window.localStorage.setItem(key, next);
  return next;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(DEFAULT_MESSAGES);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef(null);
  // conversation collection state: 'idle' | 'collecting'
  const [collecting, setCollecting] = useState(false);
  const [collectStage, setCollectStage] = useState(null); // 'name'|'email'|'phone'|null
  const [collected, setCollected] = useState({ name: null, email: null, phone: null });

  const sessionId = useMemo(() => {
    if (typeof window === "undefined") return "web-session";
    return getOrCreateSessionId();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sending]);

  const startCollection = () => {
    setCollecting(true);
    setCollectStage('name');
    setMessages((prev) => [...prev, { role: 'bot', text: 'Great — may I have your full name?' }]);
  };

  const finishCollectionAndShowPlans = () => {
    const plansText = `Thanks ${collected.name || ''}! Here are our plans:\n\n` +
      `Pro — ₹999/mo: Full Q&A, Interview Bot, Role tracks, Progress analytics.\n` +
      `Career+ — ₹4,999: Everything in Pro plus resume templates, system design drills, and monthly review.\n\n` +
      `We will follow up at ${collected.email || 'your email'} or ${collected.phone || 'your phone number'}.`;

    setMessages((prev) => [...prev, { role: 'bot', text: plansText }]);
    // reset collecting state
    setCollecting(false);
    setCollectStage(null);
    setCollected({ name: null, email: null, phone: null });
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || sending) return;

    // when in collection mode, treat user input as answers to prompts
    if (collecting) {
      setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
      setInput('');

      if (collectStage === 'name') {
        setCollected((c) => ({ ...c, name: trimmed }));
        setCollectStage('email');
        setMessages((prev) => [...prev, { role: 'bot', text: 'Thanks — please provide your email address.' }]);
        return;
      }

      if (collectStage === 'email') {
        // basic email validation
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(trimmed)) {
          setMessages((prev) => [...prev, { role: 'bot', text: 'That doesn’t look like a valid email. Please enter a valid email address.' }]);
          return;
        }
        setCollected((c) => ({ ...c, email: trimmed }));
        setCollectStage('phone');
        setMessages((prev) => [...prev, { role: 'bot', text: 'Got it. Finally, please give a phone number we can reach you on (optional).' }]);
        return;
      }

      if (collectStage === 'phone') {
        // basic phone cleanup
        const phone = trimmed.replace(/[^0-9+]/g, '');
        setCollected((c) => ({ ...c, phone }));
        setInput('');
        // show plans
        finishCollectionAndShowPlans();
        return;
      }
      return;
    }

    // not collecting: check if user asked for plans/pricing -> start collection
    const lc = trimmed.toLowerCase();
    const asksForPlans = /plan|pricing|pro|career|price/.test(lc);

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');

    if (asksForPlans) {
      startCollection();
      return;
    }

    // otherwise call backend Dialogflow
    setSending(true);
    try {
      const res = await fetch('/api/dialogflow/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, sessionId }),
      });
      const data = await res.json();
      const replyText = data?.reply || "I’m not sure yet, but I can connect you with the team.";
      setMessages((prev) => [...prev, { role: 'bot', text: replyText }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: 'Sorry, I couldn’t reach the server. Please try again in a moment.' },
      ]);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {open && (
        <div className="mb-3 w-[340px] overflow-hidden rounded-2xl border border-white/15 bg-white text-neutral-900 shadow-2xl">
          <div className="flex items-center justify-between bg-gradient-to-r from-indigo-600 to-violet-500 px-4 py-3 text-white">
            <div>
              <div className="text-sm font-semibold">Interview Prep Bot</div>
              <div className="text-xs text-white/80">Powered by Dialogflow</div>
            </div>
            <button
              className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white hover:bg-white/25"
              onClick={() => setOpen(false)}
              type="button"
            >
              Close
            </button>
          </div>

          <div className="h-[340px] space-y-3 overflow-y-auto bg-neutral-50 px-4 py-4">
            {messages.map((msg, index) => (
              <div
                key={`${msg.role}-${index}`}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                  msg.role === "user"
                    ? "ml-auto bg-indigo-600 text-white"
                    : "bg-white text-neutral-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {sending && (
              <div className="max-w-[85%] rounded-2xl bg-white px-3 py-2 text-sm text-neutral-500 shadow-sm">
                Thinking…
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="flex items-center gap-2 border-t border-neutral-200 px-3 py-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about plans, pricing, or next steps"
              className="flex-1 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={sendMessage}
              className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={sending}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 text-white shadow-xl transition hover:scale-105"
        aria-label="Open chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M12 3C6.477 3 2 6.94 2 11.8c0 2.65 1.41 5.06 3.73 6.7-.17.78-.62 2.84-.71 3.2a.4.4 0 00.56.45c.48-.2 2.7-1.12 3.57-1.48 1.01.28 2.08.43 3.2.43 5.523 0 10-3.94 10-8.8S17.523 3 12 3zm-3 9a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </button>
    </div>
  );
}
