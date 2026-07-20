"use client";

import Link from "next/link";
import { BOOK_TOPICS } from "@/lib/content";
import { rankFor, useStore } from "@/lib/store";
import { TopicGrid } from "./TopicGrid";

export function Home() {
  const { ready, progress, dueReviews, todayStats, setGoalMinutes } = useStore();
  const rank = rankFor(progress.stars);

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
              {rank.next
                ? ` · ${rank.next.min - progress.stars} to ${rank.next.name}`
                : " · top rank!"}
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
            🔁 {dueReviews.length} question{dueReviews.length === 1 ? "" : "s"} due for
            review
          </span>
          <span className="text-sm text-muted ml-2">
            Spaced repetition: nail them now and they come back less often.
          </span>
        </Link>
      )}

      <Link
        href="/wealth"
        className="block max-w-3xl mx-auto card p-5 hover:border-accent transition group"
      >
        <div className="flex items-center gap-4">
          <span className="text-4xl" aria-hidden>
            🏛️
          </span>
          <div>
            <div className="font-semibold text-lg group-hover:text-accent transition">
              The Allocator&apos;s Study →
            </div>
            <div className="text-sm text-muted mt-0.5">
              A second track for stewards of serious wealth: asset allocation, sizing,
              diversification, and capital preservation — Kelly, Merton, and Ed Thorp
              applied to the whole portfolio.
            </div>
          </div>
        </div>
      </Link>

      <TopicGrid topics={BOOK_TOPICS} />
    </div>
  );
}
