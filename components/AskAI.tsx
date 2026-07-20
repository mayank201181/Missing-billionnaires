"use client";

import { useState } from "react";
import { Md } from "@/lib/md";

const PRESETS = [
  { label: "Explain simply", prompt: "Explain this topic simply, as if to a smart friend with no finance background." },
  { label: "Give an example", prompt: "Give a concrete worked example with numbers for this topic." },
  { label: "Why does it work?", prompt: "Explain the intuition for why the main result of this topic is true." },
  { label: "Give me a hint", prompt: "I'm stuck on the current problem. Give me one small hint — not the answer." },
];

export function AskAI({ context }: { context: string }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const send = async (text: string) => {
    if (!text.trim() || busy) return;
    setError(null);
    const nextHistory: { role: "user" | "assistant"; content: string }[] = [
      ...history,
      { role: "user", content: text },
    ];
    setHistory(nextHistory);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ context, messages: nextHistory.slice(-8) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "The tutor is unavailable right now.");
      } else {
        setHistory([...nextHistory, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setError("Network error — try again in a moment.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="card p-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-semibold flex items-center gap-2">
          🧑‍🏫 Ask the tutor
          <span className="text-xs font-normal text-muted">
            Socratic hints, examples, and intuition — it won&apos;t just hand you answers
          </span>
        </span>
        <span className="text-muted">{open ? "▾" : "▸"}</span>
      </button>

      {open && (
        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => send(p.prompt)}
                disabled={busy}
                className="text-sm px-3 py-1.5 rounded-full border border-line hover:border-accent hover:text-accent disabled:opacity-40"
              >
                {p.label}
              </button>
            ))}
          </div>

          {history.length > 0 && (
            <div className="space-y-3 max-h-96 overflow-y-auto rounded-xl bg-surface-2 p-4">
              {history.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : ""}>
                  <div
                    className={`inline-block text-left text-sm rounded-xl px-3.5 py-2.5 max-w-[90%] ${
                      m.role === "user"
                        ? "bg-accent text-white"
                        : "bg-surface border border-line"
                    }`}
                  >
                    <Md text={m.content} className="prose-mb" />
                  </div>
                </div>
              ))}
              {busy && <div className="text-sm text-muted animate-pulse">Thinking…</div>}
            </div>
          )}

          {error && (
            <div className="text-sm rounded-lg border border-danger/40 bg-danger-soft px-3 py-2">
              {error}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about this topic…"
              className="flex-1 rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="px-4 py-2 rounded-lg bg-accent text-white font-medium disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
