"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Topic } from "@/lib/types";
import { useStore } from "@/lib/store";
import { GuideView } from "./GuideView";
import { QuizRunner } from "./QuizRunner";
import { ChallengeMode } from "./ChallengeMode";
import { EXPLORABLES } from "./explorables";
import { AskAI } from "./AskAI";

const TABS = [
  { key: "guide", label: "📖 Guide" },
  { key: "interactive", label: "🎛️ Interactive" },
  { key: "quiz", label: "✏️ Quiz" },
  { key: "challenge", label: "⏱️ Challenge" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export function TopicView({ topic }: { topic: Topic }) {
  const params = useSearchParams();
  const initial = (params.get("tab") as TabKey) || "guide";
  const [tab, setTab] = useState<TabKey>(
    TABS.some((t) => t.key === initial) ? initial : "guide"
  );
  const { progress } = useStore();

  const read = progress.guidesRead[topic.id]?.length ?? 0;
  const quizQuestions = topic.quiz.map((q) => ({ ...q, topicId: topic.id }));
  const Explorable = EXPLORABLES[topic.interactive];

  return (
    <div className="pt-6 space-y-5">
      <div>
        <Link href="/" className="text-sm text-muted hover:text-accent">
          ← All topics
        </Link>
        <div className="flex items-start gap-3 mt-2">
          <span className="text-4xl" aria-hidden>
            {topic.icon}
          </span>
          <div>
            <div className="text-xs uppercase tracking-wide text-gold font-semibold">
              {topic.part}
            </div>
            <h1 className="text-3xl font-semibold leading-tight">{topic.title}</h1>
            <p className="text-muted mt-1">{topic.tagline}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-1.5 border-b border-line overflow-x-auto">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap rounded-t-lg border-b-2 transition ${
              tab === t.key
                ? "border-accent text-accent bg-accent-soft/40"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {t.label}
            {t.key === "guide" && read > 0 && (
              <span className="ml-1.5 text-xs text-accent">
                {read}/{topic.guide.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {tab === "guide" && <GuideView topic={topic} />}

      {tab === "interactive" && (
        <div className="space-y-5">
          <div className="card p-5">
            <h2 className="text-xl font-semibold mb-1">{topic.interactiveTitle}</h2>
            <p className="text-muted text-sm mb-5">{topic.interactiveBlurb}</p>
            {Explorable ? (
              <Explorable />
            ) : (
              <p className="text-muted">This explorable is still under construction.</p>
            )}
          </div>
          <AskAI
            context={`The learner is playing with the interactive widget "${topic.interactiveTitle}" for the topic "${topic.title}".`}
          />
        </div>
      )}

      {tab === "quiz" && (
        <QuizRunner questions={quizQuestions} title={topic.title} />
      )}

      {tab === "challenge" && <ChallengeMode topic={topic} />}
    </div>
  );
}
