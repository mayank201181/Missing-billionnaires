"use client";

import { useState } from "react";
import type { Topic } from "@/lib/types";
import { Md } from "@/lib/md";
import { useStore } from "@/lib/store";
import { AskAI } from "./AskAI";

function DiscoveryBox({
  problem,
  idea,
}: {
  problem: string;
  idea: string;
}) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="rounded-xl border border-gold bg-gold-soft/60 p-4 mb-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-gold mb-1.5">
        🧩 Try this first
      </div>
      <Md text={problem} className="prose-mb text-[0.95rem]" />
      {revealed ? (
        <div className="mt-3 pt-3 border-t border-gold/40 pop-in">
          <div className="text-xs font-semibold uppercase tracking-wide text-accent mb-1.5">
            💡 The idea
          </div>
          <Md text={idea} className="prose-mb text-[0.95rem]" />
        </div>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="mt-3 text-sm font-medium text-accent hover:underline"
        >
          I&apos;ve had a go — reveal the idea →
        </button>
      )}
    </div>
  );
}

export function GuideView({ topic }: { topic: Topic }) {
  const { progress, markSectionRead } = useStore();
  const read = progress.guidesRead[topic.id] ?? [];

  return (
    <div className="space-y-6">
      <div className="card p-5">
        <Md text={topic.intro} className="prose-mb text-[1.02rem] leading-relaxed" />
      </div>

      {topic.guide.map((section, i) => {
        const isRead = read.includes(i);
        return (
          <section key={i} className="card p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="text-xl font-semibold">
                <span className="text-muted mr-2 font-normal">{i + 1}.</span>
                {section.heading}
              </h2>
              <button
                onClick={() => markSectionRead(topic.id, i)}
                disabled={isRead}
                className={`shrink-0 text-xs px-2.5 py-1.5 rounded-full border transition ${
                  isRead
                    ? "border-accent bg-accent-soft text-accent cursor-default"
                    : "border-line text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {isRead ? "✓ Read" : "Mark read"}
              </button>
            </div>

            {section.discovery && (
              <DiscoveryBox
                problem={section.discovery.problem}
                idea={section.discovery.idea}
              />
            )}

            <Md text={section.body} className="prose-mb leading-relaxed" />

            {section.whyItWorks && (
              <div className="mt-4 rounded-xl border border-accent/40 bg-accent-soft/50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-accent mb-1.5">
                  Why does this work?
                </div>
                <Md text={section.whyItWorks} className="prose-mb text-[0.95rem]" />
              </div>
            )}

            {section.strategies && section.strategies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {section.strategies.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-line text-muted"
                  >
                    🧭 {s}
                  </span>
                ))}
              </div>
            )}

            {section.keyPoints && (
              <div className="mt-4 rounded-xl bg-surface-2 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                  Key points
                </div>
                <ul className="mdlist text-[0.95rem]">
                  {section.keyPoints.map((k, j) => (
                    <li key={j}>{k}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        );
      })}

      <AskAI
        context={`The learner is reading the guide for the topic "${topic.title}" (${topic.tagline}) from The Missing Billionaires study app.`}
      />
    </div>
  );
}
