"use client";

import Link from "next/link";
import type { Topic } from "@/lib/types";
import { useStore } from "@/lib/store";

export function TopicGrid({ topics }: { topics: Topic[] }) {
  const { ready, progress } = useStore();

  const parts: { part: string; topics: Topic[] }[] = [];
  for (const t of topics) {
    const bucket = parts.find((p) => p.part === t.part);
    if (bucket) bucket.topics.push(t);
    else parts.push({ part: t.part, topics: [t] });
  }

  const masteryOf = (topic: Topic) => {
    const maxStars = topic.quiz.reduce(
      (sum, q) =>
        sum + (q.difficulty === "challenge" ? 3 : q.difficulty === "core" ? 2 : 1) + 1,
      0
    );
    const got = topic.quiz.reduce((sum, q) => sum + (progress.awarded[q.id] ?? 0), 0);
    return maxStars === 0 ? 0 : Math.round((got / maxStars) * 100);
  };

  return (
    <>
      {parts.map(({ part, topics: partTopics }) => (
        <section key={part}>
          <h2 className="text-lg font-semibold text-gold mb-3">{part}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {partTopics.map((t) => {
              const read = progress.guidesRead[t.id]?.length ?? 0;
              const mastery = ready ? masteryOf(t) : 0;
              return (
                <Link
                  key={t.id}
                  href={`/topic/${t.id}`}
                  className="card p-5 hover:border-accent transition group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl" aria-hidden>
                      {t.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="font-semibold leading-snug group-hover:text-accent transition">
                        {t.order >= 100 ? t.order - 100 : t.order}. {t.title}
                      </div>
                      <div className="text-sm text-muted mt-1 line-clamp-2">{t.tagline}</div>
                    </div>
                  </div>
                  {ready && (
                    <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                      <span title="Guide sections read">
                        📖 {read}/{t.guide.length}
                      </span>
                      <div
                        className="flex-1 h-1.5 rounded-full bg-surface-2 overflow-hidden"
                        title={`Quiz mastery ${mastery}%`}
                      >
                        <div className="h-full bg-accent" style={{ width: `${mastery}%` }} />
                      </div>
                      <span>{mastery}%</span>
                      {(progress.challengeBest[t.id] ?? 0) > 0 && (
                        <span title="Challenge best">
                          🏅 {progress.challengeBest[t.id]}/{t.quiz.length}
                        </span>
                      )}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </>
  );
}
