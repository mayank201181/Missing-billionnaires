"use client";

import Link from "next/link";
import { TOPICS } from "@/lib/content";
import { rankFor, useStore } from "@/lib/store";

export function Home() {
  const { ready, progress, dueReviews, todayStats, setGoalMinutes } = useStore();
  const rank = rankFor(progress.stars);

  const parts: { part: string; topics: typeof TOPICS }[] = [];
  for (const t of TOPICS) {
    const bucket = parts.find((p) => p.part === t.part);
    if (bucket) bucket.topics.push(t);
    else parts.push({ part: t.part, topics: [t] });
  }

  const masteryOf = (topicId: string) => {
    const topic = TOPICS.find((t) => t.id === topicId)!;
    const maxStars = topic.quiz.reduce(
      (sum, q) => sum + (q.difficulty === "challenge" ? 3 : q.difficulty === "core" ? 2 : 1) + 1,
      0
    );
    const got = topic.quiz.reduce((sum, q) => sum + (progress.awarded[q.id] ?? 0), 0);
    return maxStars === 0 ? 0 : Math.round((got / maxStars) * 100);
  };

  return (
    <div className="pt-8 space-y-8">
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
          The Missing Billionaires
          <span className="block text-xl sm:text-2xl text-gold mt-1">Study Lab</span>
        </h1>
        <p className="text-muted mt-3 leading-relaxed">
          Master the ideas of Haghani &amp; White&apos;s book step by step: why sizing beats
          stock-picking, how expected utility turns risk into arithmetic, and how to make
          every big money decision — investing, spending, insuring — with one framework.
        </p>
      </section>

      {ready && (
        <section className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="card p-4 text-center">
            <div className="text-2xl">{rank.icon}</div>
            <div className="font-semibold">{rank.name}</div>
            <div className="text-xs text-muted">
              ⭐ {progress.stars}
              {rank.next ? ` · ${rank.next.min - progress.stars} to ${rank.next.name}` : " · top rank!"}
            </div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl">🔥</div>
            <div className="font-semibold">{progress.streak.current}-day streak</div>
            <div className="text-xs text-muted">Best: {progress.streak.best}</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl">🎯</div>
            <div className="font-semibold">
              {Math.round(todayStats.minutes)} / {progress.goalMinutes} min today
            </div>
            <div className="text-xs text-muted flex items-center justify-center gap-1.5 mt-0.5">
              Daily goal:
              <select
                value={progress.goalMinutes}
                onChange={(e) => setGoalMinutes(Number(e.target.value))}
                className="bg-surface border border-line rounded px-1 py-0.5 text-xs"
              >
                {[10, 15, 20, 30, 45, 60].map((m) => (
                  <option key={m} value={m}>
                    {m}m
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
      )}

      {ready && dueReviews.length > 0 && (
        <Link
          href="/review"
          className="block max-w-3xl mx-auto rounded-xl border border-gold bg-gold-soft/60 px-5 py-4 hover:opacity-90"
        >
          <span className="font-semibold text-gold">
            🔁 {dueReviews.length} question{dueReviews.length === 1 ? "" : "s"} due for review
          </span>
          <span className="text-sm text-muted ml-2">
            Spaced repetition: nail them now and they come back less often.
          </span>
        </Link>
      )}

      {parts.map(({ part, topics }) => (
        <section key={part}>
          <h2 className="text-lg font-semibold text-gold mb-3">{part}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {topics.map((t) => {
              const read = progress.guidesRead[t.id]?.length ?? 0;
              const mastery = ready ? masteryOf(t.id) : 0;
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
                        {t.order}. {t.title}
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
                        <div
                          className="h-full bg-accent"
                          style={{ width: `${mastery}%` }}
                        />
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
    </div>
  );
}
