"use client";

import Link from "next/link";
import { rankFor, useStore } from "@/lib/store";

export function Header() {
  const { ready, progress, dueReviews, todayStats } = useStore();
  const rank = rankFor(progress.stars);
  const goalPct = Math.min(
    100,
    Math.round((todayStats.minutes / Math.max(1, progress.goalMinutes)) * 100)
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <span className="text-2xl" aria-hidden>
            💰
          </span>
          <span className="display font-semibold text-lg leading-tight truncate">
            The Missing Billionaires{" "}
            <span className="text-muted font-normal hidden sm:inline">· Study Lab</span>
          </span>
        </Link>
        <div className="ml-auto flex items-center gap-3 text-sm">
          {ready && (
            <>
              <Link
                href="/review"
                className={`hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full border ${
                  dueReviews.length > 0
                    ? "border-gold bg-gold-soft text-gold font-medium"
                    : "border-line text-muted"
                }`}
                title="Review queue"
              >
                🔁 {dueReviews.length}
              </Link>
              <span
                className="flex items-center gap-1 text-muted"
                title={`Daily goal: ${todayStats.minutes} of ${progress.goalMinutes} min`}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden>
                  <circle cx="10" cy="10" r="8" fill="none" stroke="var(--line)" strokeWidth="3" />
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="3"
                    strokeDasharray={`${(goalPct / 100) * 50.27} 50.27`}
                    strokeLinecap="round"
                    transform="rotate(-90 10 10)"
                  />
                </svg>
                <span className="hidden sm:inline">{goalPct}%</span>
              </span>
              <span className="flex items-center gap-1" title="Daily streak">
                🔥 {progress.streak.current}
              </span>
              <span
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-soft text-accent font-medium"
                title={`Rank: ${rank.name}`}
              >
                ⭐ {progress.stars}
                <span className="hidden md:inline">· {rank.icon} {rank.name}</span>
              </span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
