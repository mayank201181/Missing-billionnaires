"use client";

import Link from "next/link";
import { WEALTH_TOPICS } from "@/lib/content";
import { TopicGrid } from "./TopicGrid";

export function WealthHome() {
  return (
    <div className="pt-8 space-y-8">
      <section className="text-center max-w-2xl mx-auto">
        <div className="text-5xl mb-2" aria-hidden>
          🏛️
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
          The Allocator&apos;s Study
        </h1>
        <p className="text-gold text-lg mt-1">
          Capital preservation with consistent growth
        </p>
        <p className="text-muted mt-3 leading-relaxed">
          A course for people who already have serious wealth. The game changes once
          you&apos;re rich: you no longer need to find winners — you need to{" "}
          <em>stay</em> rich while compounding does the work. Eight topics on asset
          allocation, position sizing, diversification, and drawdown control, built on the
          Kelly criterion, the Merton share, and the teachings of Ed Thorp and{" "}
          <em>The Missing Billionaires</em>. Allocation decisions, not timing decisions.
        </p>
        <p className="text-sm text-muted mt-3">
          New here? The{" "}
          <Link href="/" className="text-accent hover:underline">
            book track
          </Link>{" "}
          builds the foundations; this track applies them to a whole balance sheet.
        </p>
      </section>

      <TopicGrid topics={WEALTH_TOPICS} />

      {WEALTH_TOPICS.length === 0 && (
        <div className="card p-10 text-center text-muted">
          The Allocator&apos;s Study is being prepared — check back shortly.
        </div>
      )}
    </div>
  );
}
