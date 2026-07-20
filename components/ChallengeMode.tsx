"use client";

import { useEffect, useRef, useState } from "react";
import type { Topic } from "@/lib/types";
import { Md } from "@/lib/md";
import { useStore } from "@/lib/store";

const SECONDS = 120;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ChallengeMode({ topic }: { topic: Topic }) {
  const { progress, recordResult, recordChallenge } = useStore();
  const [phase, setPhase] = useState<"idle" | "running" | "done">("idle");
  const [questions, setQuestions] = useState(topic.quiz);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(SECONDS);
  const [flash, setFlash] = useState<"right" | "wrong" | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const best = progress.challengeBest[topic.id] ?? 0;

  const stop = (finalScore: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    recordChallenge(topic.id, finalScore);
    setPhase("done");
  };

  const start = () => {
    setQuestions(shuffle(topic.quiz));
    setIdx(0);
    setScore(0);
    setTimeLeft(SECONDS);
    setPhase("running");
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setPhase("done");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  // record best when timer expires (phase changed by interval)
  const scoreRef = useRef(score);
  useEffect(() => {
    scoreRef.current = score;
  }, [score]);
  useEffect(() => {
    if (phase === "done") recordChallenge(topic.id, scoreRef.current);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const answer = (i: number) => {
    const q = questions[idx];
    const correct = i === q.answerIndex;
    recordResult(q.id, correct, 99); // hints "used" so no hint-free bonus in challenge
    setFlash(correct ? "right" : "wrong");
    setTimeout(() => setFlash(null), 350);
    const newScore = correct ? score + 1 : score;
    setScore(newScore);
    if (idx + 1 >= questions.length) {
      stop(newScore);
    } else {
      setIdx(idx + 1);
    }
  };

  if (phase === "idle") {
    return (
      <div className="card p-8 text-center">
        <div className="text-5xl mb-3">⏱️</div>
        <h2 className="text-2xl font-semibold mb-2">Challenge mode</h2>
        <p className="text-muted max-w-md mx-auto mb-2">
          All {topic.quiz.length} questions, {SECONDS / 60} minutes, no hints. Wrong
          answers still feed your review queue.
        </p>
        {best > 0 && (
          <p className="text-sm text-gold mb-4">
            🏅 Personal best: {best}/{topic.quiz.length}
          </p>
        )}
        <button
          onClick={start}
          className="px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:opacity-90"
        >
          Start the clock
        </button>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="card p-8 text-center pop-in">
        <div className="text-5xl mb-3">{score > best ? "🎉" : "⏱️"}</div>
        <h2 className="text-2xl font-semibold mb-2">
          {score}/{questions.length}
          {score >= Math.max(best, 1) && score > 0 ? " — new best!" : ""}
        </h2>
        <p className="text-muted mb-5">
          {timeLeft === 0 ? "Time ran out. " : ""}Personal best:{" "}
          {Math.max(best, score)}/{topic.quiz.length}
        </p>
        <button
          onClick={start}
          className="px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:opacity-90"
        >
          Run it again
        </button>
      </div>
    );
  }

  const q = questions[idx];
  return (
    <div
      className={`space-y-4 transition-colors ${
        flash === "right" ? "bg-accent-soft/40" : flash === "wrong" ? "bg-danger-soft/40" : ""
      } rounded-2xl`}
    >
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted">
          Question {idx + 1}/{questions.length} · Score {score}
        </span>
        <span
          className={`font-mono font-semibold ${
            timeLeft <= 15 ? "text-danger" : "text-foreground"
          }`}
        >
          {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
        <div
          className={`h-full transition-all ${timeLeft <= 15 ? "bg-danger" : "bg-gold"}`}
          style={{ width: `${(timeLeft / SECONDS) * 100}%` }}
        />
      </div>
      <div className="card p-5">
        <Md text={q.question} className="prose-mb text-[1.05rem] font-medium mb-4" />
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => answer(i)}
              className="w-full text-left px-4 py-3 rounded-xl border border-line hover:border-accent transition"
            >
              <span className="font-mono text-xs text-muted mr-2">
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
