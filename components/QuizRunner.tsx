"use client";

import { useState } from "react";
import Link from "next/link";
import type { MCQ } from "@/lib/types";
import { Md } from "@/lib/md";
import { starsFor, useStore } from "@/lib/store";

const DIFF_STYLE: Record<string, string> = {
  warmup: "bg-accent-soft text-accent",
  core: "bg-gold-soft text-gold",
  challenge: "bg-danger-soft text-danger",
};

const DIFF_LABEL: Record<string, string> = {
  warmup: "Warm-up",
  core: "Core",
  challenge: "Challenge",
};

export interface QuizQuestion extends MCQ {
  topicId: string;
}

interface Props {
  questions: QuizQuestion[];
  title: string;
  onFinish?: (score: number, total: number) => void;
}

export function QuizRunner({ questions, title, onFinish }: Props) {
  const { recordResult } = useStore();
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [hintsShown, setHintsShown] = useState(0);
  const [earnedNow, setEarnedNow] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[idx];
  const total = questions.length;

  const check = () => {
    if (selected === null || checked) return;
    const correct = selected === q.answerIndex;
    const earned = recordResult(q.id, correct, hintsShown);
    setWasCorrect(correct);
    setEarnedNow(earned);
    setChecked(true);
    if (correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 >= total) {
      setDone(true);
      onFinish?.(score, total);
      return;
    }
    setIdx(idx + 1);
    setSelected(null);
    setChecked(false);
    setHintsShown(0);
    setEarnedNow(0);
  };

  const restart = () => {
    setIdx(0);
    setSelected(null);
    setChecked(false);
    setHintsShown(0);
    setEarnedNow(0);
    setScore(0);
    setDone(false);
  };

  if (total === 0) {
    return (
      <div className="card p-6 text-center text-muted">Nothing to practise here yet.</div>
    );
  }

  if (done) {
    const pct = Math.round((score / total) * 100);
    return (
      <div className="card p-8 text-center pop-in">
        <div className="text-5xl mb-3">{pct >= 80 ? "🏆" : pct >= 50 ? "💪" : "🌱"}</div>
        <h2 className="text-2xl font-semibold mb-2">
          {score} / {total} correct
        </h2>
        <p className="text-muted mb-5">
          {pct >= 80
            ? "Excellent — you clearly understand this material."
            : pct >= 50
            ? "Good progress. The ones you missed are now in your review queue."
            : "A tough round — missed questions are queued for spaced review, and re-reading the guide will help."}
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={restart}
            className="px-4 py-2 rounded-lg bg-accent text-white font-medium hover:opacity-90"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg border border-line hover:border-accent"
          >
            All topics
          </Link>
        </div>
      </div>
    );
  }

  const hints = q.hints ?? [];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-muted">
        <span>
          {title} · Question {idx + 1} of {total}
        </span>
        <span>Score: {score}</span>
      </div>
      <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
        <div
          className="h-full bg-accent transition-all"
          style={{ width: `${(idx / total) * 100}%` }}
        />
      </div>

      <div className="card p-5">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${DIFF_STYLE[q.difficulty]}`}
          >
            {DIFF_LABEL[q.difficulty]} · {starsFor(q.difficulty)}⭐
          </span>
          {q.strategy && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-line text-muted">
              🧭 {q.strategy}
            </span>
          )}
        </div>

        <Md text={q.question} className="prose-mb text-[1.05rem] font-medium mb-4" />

        <div className="space-y-2">
          {q.options.map((opt, i) => {
            let cls = "border-line hover:border-accent";
            if (checked) {
              if (i === q.answerIndex) cls = "border-accent bg-accent-soft";
              else if (i === selected) cls = "border-danger bg-danger-soft";
              else cls = "border-line opacity-60";
            } else if (i === selected) {
              cls = "border-accent bg-accent-soft/50";
            }
            return (
              <button
                key={i}
                onClick={() => !checked && setSelected(i)}
                disabled={checked}
                className={`w-full text-left px-4 py-3 rounded-xl border transition ${cls}`}
              >
                <span className="font-mono text-xs text-muted mr-2">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {!checked && hints.length > 0 && (
          <div className="mt-4">
            {hintsShown < hints.length && (
              <button
                onClick={() => setHintsShown(hintsShown + 1)}
                className="text-sm text-gold font-medium hover:underline"
              >
                💡 {hintsShown === 0 ? "Need a nudge? Show hint" : "Show next hint"} (
                {hintsShown}/{hints.length} used
                {hintsShown === 0 ? " — solve hint-free for a bonus star" : ""})
              </button>
            )}
            <div className="space-y-2 mt-2">
              {hints.slice(0, hintsShown).map((h, i) => (
                <div
                  key={i}
                  className="text-sm rounded-lg border border-gold/40 bg-gold-soft/50 px-3 py-2 pop-in"
                >
                  <span className="font-semibold text-gold mr-1">Hint {i + 1}:</span>
                  {h}
                </div>
              ))}
            </div>
          </div>
        )}

        {!checked ? (
          <button
            onClick={check}
            disabled={selected === null}
            className="mt-5 px-5 py-2.5 rounded-lg bg-accent text-white font-medium disabled:opacity-40 hover:opacity-90"
          >
            Check answer
          </button>
        ) : (
          <div className="mt-5 pop-in">
            <div
              className={`rounded-xl border p-4 ${
                wasCorrect
                  ? "border-accent bg-accent-soft/60"
                  : "border-danger bg-danger-soft/60"
              }`}
            >
              <div className="font-semibold mb-1">
                {wasCorrect
                  ? earnedNow > 0
                    ? `Correct! +${earnedNow}⭐${hintsShown === 0 ? " (hint-free bonus included)" : ""}`
                    : "Correct!"
                  : `Not quite — the answer is ${String.fromCharCode(65 + q.answerIndex)}.`}
              </div>
              <Md text={q.explanation} className="prose-mb text-[0.95rem]" />
              {!wasCorrect && (
                <div className="text-xs text-muted mt-2">
                  🔁 Added to your spaced-repetition review queue.
                </div>
              )}
              {q.guideRef !== undefined && (
                <Link
                  href={`/topic/${q.topicId}?tab=guide#section-${q.guideRef}`}
                  className="inline-block text-sm text-accent font-medium mt-2 hover:underline"
                >
                  ← Back to the guide section
                </Link>
              )}
            </div>
            <button
              onClick={next}
              className="mt-4 px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:opacity-90"
            >
              {idx + 1 >= total ? "Finish" : "Next question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
