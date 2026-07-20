"use client";

import { useState } from "react";
import { Caption, Slider, Stat } from "./ui";

export function AssetMenu() {
  const [cape, setCape] = useState(25);
  const [tips, setTips] = useState(1.5);
  const [spread, setSpread] = useState(2);
  const [rentYield, setRentYield] = useState(3);
  const [feePct, setFeePct] = useState(0.5);

  const rows = [
    {
      name: "Global equities (index)",
      formula: `1 / CAPE ${cape}`,
      ret: 100 / cape,
      vol: "~18%",
      note: "earnings yield as the humble anchor",
    },
    {
      name: "TIPS / inflation-linked bonds",
      formula: "the real yield you can see",
      ret: tips,
      vol: "~5%",
      note: "contractual — no estimation needed",
    },
    {
      name: "Investment-grade credit",
      formula: `TIPS + spread ${spread}% − ~40% of spread lost to defaults`,
      ret: tips + spread * 0.6,
      vol: "~8%",
      note: "half the spread can vanish in bad cycles",
    },
    {
      name: "Real estate (net of costs)",
      formula: `net rent ${rentYield}% + ~0% real growth`,
      ret: rentYield,
      vol: "~15%",
      note: "illiquid; concentrated unless securitised",
    },
    {
      name: "Gold",
      formula: "0% real over centuries",
      ret: 0,
      vol: "~15%",
      note: "insurance, not investment — size accordingly",
    },
    {
      name: "Cash / bills",
      formula: "real bill rate",
      ret: 0.5,
      vol: "~1%",
      note: "safe for spending, ruinous as a store",
    },
  ];

  const maxRet = Math.max(...rows.map((r) => r.ret), 5);

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Slider label="Equity CAPE today" value={cape} onChange={setCape} min={15} max={40} step={1} />
        <Slider
          label="TIPS real yield"
          value={tips}
          onChange={setTips}
          min={0}
          max={3}
          step={0.25}
          format={(v) => `${v.toFixed(2)}%`}
        />
        <Slider
          label="Credit spread"
          value={spread}
          onChange={setSpread}
          min={0.5}
          max={6}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="All-in fees you pay"
          value={feePct}
          onChange={setFeePct}
          min={0}
          max={2.5}
          step={0.1}
          format={(v) => `${v.toFixed(1)}%`}
        />
      </div>

      <div className="space-y-3">
        {rows.map((r) => {
          const net = r.ret - feePct;
          return (
            <div key={r.name} className="rounded-xl bg-surface-2 px-4 py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                <span className="font-medium">{r.name}</span>
                <span className="font-mono text-sm">
                  <span className={net >= 0 ? "text-accent" : "text-danger"}>
                    {net.toFixed(1)}% real
                  </span>
                  <span className="text-muted"> after fees · vol {r.vol}</span>
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-surface overflow-hidden border border-line">
                <div
                  className={`h-full ${net >= 0 ? "bg-accent" : "bg-danger"}`}
                  style={{ width: `${(Math.max(0, net) / maxRet) * 100}%` }}
                />
              </div>
              <div className="text-xs text-muted mt-1">
                {r.formula} — {r.note}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Slider
          label="Real estate net rental yield"
          value={rentYield}
          onChange={setRentYield}
          min={1}
          max={6}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Stat
          label="Fee drag across the whole menu"
          value={`−${feePct.toFixed(1)}% / yr everywhere`}
          tone={feePct > 1 ? "bad" : "default"}
        />
      </div>

      <Caption>
        Every number here is anchored to something you can observe <em>today</em> — an
        earnings yield, a bond yield, a rent — never to last decade’s performance. Notice
        two things: no asset class offers a magic number (that’s why allocation across
        several beats hunting the best one), and the fee slider moves every bar at once —
        cost is the one input you fully control. If you can’t fill in a row for an asset
        you’re offered — expected real return, volatility, correlation, fee, tax — you
        can’t size it, so you shouldn’t own it.
      </Caption>
    </div>
  );
}
