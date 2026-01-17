import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // nice code theme

export default function AnswerMarkdown({ text }) {
  if (!text) return null;

  return (
    <div className="rounded-2xl bg-black/30 border border-white/15 p-4">
      <div className="text-sm font-semibold mb-2 text-white">Answer</div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Make tables look good with Tailwind
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/15 rounded-xl overflow-hidden">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-white/10">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="text-left p-3 font-semibold border-b border-white/15">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="p-3 border-b border-white/10 align-top">{children}</td>
          ),
          code: ({ inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code className="px-1 py-0.5 rounded bg-white/10" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <pre className="mt-3 rounded-xl overflow-x-auto p-4 bg-[#0b1220] border border-white/10">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },
          p: ({ children }) => (
            <p className="text-sm text-white/90 leading-relaxed mb-2">{children}</p>
          ),
          h2: ({ children }) => (
            <h2 className="text-base font-semibold mt-4 mb-2">{children}</h2>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 space-y-1 text-sm text-white/90">
              {children}
            </ul>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
