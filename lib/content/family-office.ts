import type { Topic } from "../types";

export const familyOffice: Topic = {
  id: "family-office",
  title: "The Family-Office Playbook",
  icon: "🗝️",
  part: "The Allocator's Track — Staying Rich",
  order: 108,
  track: "wealth",
  tagline:
    "Endowment discipline for a family fortune: spend the geometric return, blunt the thousand cuts, and hand down the operating system",
  intro:
    "You have solved the hard problem — the wealth exists. The remaining problem is the one that erased the 1900 millionaires: keeping it real, per heir, forever. The institutions that come closest to solving perpetual wealth are university endowments, and their playbook translates directly to family scale. This module covers the four load-bearing pieces: a spending rate anchored to the portfolio's *real geometric* return, not its arithmetic average; a smoothing rule that makes that spending livable; a clear-eyed accounting of the headwinds — estate division, inflation, taxes, fees — that each look small and jointly decide everything; and the governance layer (policy statement, decision journal, crash protocol) that turns a framework into an inheritance. The missing billionaires didn't lack opportunities. They lacked this page.",
  guide: [
    {
      heading: "Spend like a perpetual endowment",
      discovery: {
        problem:
          "Your family's balanced portfolio has an expected real geometric return of about 3.5% per year. The goal is permanence: every future generation should inherit the same real wealth you hold today. Before reading on, commit to two estimates: the highest spending rate the family can sustain forever, and what happens over a century at a 5% rate — a number many families would call conservative.",
        idea:
          "The sustainable perpetual rate is roughly the real geometric return minus a safety buffer: about **2.5-3%** here. At 5%, the family runs a net drift of 3.5% − 5% = **−1.5% per year**. By the rule of 72, real wealth halves roughly every 46-48 years — about once per generation. Nothing dramatic ever happens; the fortune simply fades on schedule.",
      },
      body:
        "A university endowment exists to fund a mission forever, and the mature ones all converge on the same arithmetic: **perpetual spending rate ≈ expected real geometric return − a safety buffer**. A family that wants multi-generational wealth is, functionally, an endowment, and the same equation governs it.\n\nFor a 60/40-style portfolio with an expected real geometric return around 3.5%, the answer is a spending rate of roughly **2.5-3%** of wealth. That number strikes most people as shockingly small against a fortune that feels inexhaustible. The discovery problem shows why it isn't negotiable: every point of spending above the geometric return is a scheduled, compounding decline. At 5% spending the decline is invisible year to year — a 1.5% annual leak never makes the family meeting agenda — yet it halves the real fortune in under half a century.\n\nThe buffer is not timidity. It absorbs estimation error in your return forecast, sequence-of-returns risk, the occasional emergency draw, and the honest possibility that future returns are lower than the past's. Spending the full expected return leaves zero margin; the buffer is what makes 'perpetual' a plan rather than a hope.",
      whyItWorks:
        "Wealth spent as a fixed fraction s of the portfolio compounds at approximately g − s, where g is the real geometric return. If g − s ≥ 0, real wealth is preserved or grows forever; if g − s < 0, decay is exponential and the rule of 72 dates the fortune's half-life. The entire game of perpetual wealth reduces to keeping that one difference non-negative, with room to spare.",
      strategies: ["Rule of 72 / doubling times", "Reduce to one net rate"],
      keyPoints: [
        "Sustainable perpetual spending ≈ real geometric return − safety buffer; for a 60/40-style portfolio (~3.5% real), that is roughly 2.5-3%",
        "Spending 5% from the same portfolio means −1.5%/yr net: real wealth halves roughly every 46-48 years — about once per generation",
        "The buffer absorbs estimation error, bad sequences, and emergencies; it is what separates a plan from a hope",
      ],
    },
    {
      heading: "Geometric, not arithmetic",
      discovery: {
        problem:
          "A strategy returns +50% one year and −33.3% the next, alternating forever. Its arithmetic average return is a handsome (50 − 33.3)/2 ≈ +8.3% per year. You invest for 40 years. Roughly how rich do you get?",
        idea:
          "You get exactly nowhere. Each two-year cycle multiplies wealth by 1.5 × 0.667 = 1.0. The arithmetic average is +8.3%; the geometric (compound) return — the rate your wealth actually experiences — is **0%**. Averages of returns lie whenever returns are volatile; only the compound rate pays for spending.",
      },
      body:
        "Every number in the endowment equation must be the **geometric** (compound) return, never the arithmetic average. The gap between them is the volatility drag: approximately **sigma²/2**, half the variance of returns.\n\nThat drag is not a technicality — it is real money. A portfolio with a 5% arithmetic real return and 20% volatility compounds at roughly 5% − (0.20² / 2) = 5% − 2% = **3%**. Two full percentage points of the advertised return never arrive. Now put that beside the first section's arithmetic: if the family reads '5% expected return' in a pitch deck and spends 4% believing it has a point of margin, it is actually running −1% per year. The pitch deck was quoting the arithmetic mean; the family's wealth compounds at the geometric.\n\nThis is also why volatility reduction is not merely about comfort. Cutting portfolio volatility from 20% to 14% shrinks the drag from 2.0 points to about 1.0 point — a full percentage point of extra *compound* return, worth more than most manager-selection victories, obtained without any change in the arithmetic expectation.\n\nHouse rule for every family document: state returns as real and geometric, or not at all.",
      whyItWorks:
        "Compounding multiplies; volatility hurts multiplication asymmetrically. A −20% year needs +25% to recover, a −50% year needs +100%. A second-order expansion of log(1+r) makes this precise: E[log(1+r)] ≈ E[r] − Var(r)/2, so the long-run compound rate trails the arithmetic mean by half the variance. The bigger the swings, the bigger the gap between the average you are quoted and the growth you get.",
      strategies: ["Consider extremes", "Check the units (arithmetic vs geometric)"],
      keyPoints: [
        "Wealth compounds at the geometric return; geometric ≈ arithmetic − sigma²/2",
        "At 20% volatility the drag is ~2 percentage points per year — real money, silently missing from every arithmetic quote",
        "Reducing volatility raises the compound return even with the arithmetic return unchanged",
      ],
    },
    {
      heading: "Smoothing: a life you can plan",
      body:
        "A pure percentage-of-wealth rule has a hidden cost: your lifestyle inherits the portfolio's volatility. A 30% drawdown becomes a 30% cut to school fees, staff, and philanthropy in the same year — which is exactly when families abandon good rules.\n\nThe endowment world's fix is elegant: spend a fixed percentage of the **trailing 3-year average of wealth**, not of the latest print. After a crash, spending declines — it must, or the rule stops being sustainable — but it declines over three years instead of one, at a pace a household can absorb. After a boom, spending rises with the same lag, which conveniently stops a two-year bull market from ratcheting the family into commitments only a bubble can fund.\n\nTwo properties make this the right compromise. First, it is still proportional at heart: spending tracks wealth, so the rule can bend but never bankrupt — a fixed-dollar rule, by contrast, keeps drawing the same amount from a shrunken base and can drive wealth to zero. Second, it is *mechanical*. The number for next year is computed, not negotiated, which removes the annual family debate in which the most persuasive relative sets the spending rate.\n\nPick the rate from section one, apply it to the 3-year average, and let the formula take the blame in bad years.",
      whyItWorks:
        "Averaging over three years filters the noisy component of wealth while passing through the persistent component. Spending still converges to the target fraction of true wealth — sustainability is preserved — but the year-to-year variance of consumption falls dramatically, because single-year market swings are diluted by two calmer observations.",
      keyPoints: [
        "Spend a fixed percentage of the 3-year average of wealth — endowment practice adapted to families",
        "Consumption still adapts to reality, but slowly enough to plan a life around",
        "Proportional rules bend but never bankrupt; fixed-dollar rules can hit zero",
      ],
    },
    {
      heading: "The thousand cuts",
      discovery: {
        problem:
          "Your sustainable real spending is 3% of wealth. Your all-in fee load — advisor, funds, vehicles, admin — is 1%, which everyone at the table agrees is 'just one percent'. What fraction of the family's spendable income does that one percent consume, forever?",
        idea:
          "A **third**. Fees are not paid from the fortune; they are paid from the same thin slice of real return that funds all spending. 1% against a 3% sustainable budget is one dollar in three, every year, in perpetuity. Measured against the margin that matters, 'just one percent' is the single largest line item in most family budgets.",
      },
      body:
        "The 1900 millionaires were rarely wiped out by a crash. They were bled by headwinds that each looked ignorable:\n\n- **Estate division.** With 2-3 inheriting children per generation, capital splits 8x to 27x across three generations (2³ to 3³) before markets do anything at all.\n- **Inflation.** Silent, permanent, and fatal to anyone 'safely' in cash.\n- **Taxes on returns.** An annual drag on the compounding rate itself.\n- **Fees on everything.** See the discovery problem.\n\nEach cut is 'small'; jointly they are decisive. The defense is unglamorous and almost free. Negotiating the fee load down is the highest-Sharpe activity in wealth management — a certain, permanent, risk-free addition to the family's spendable income. Keep turnover low; unrealized gains are an interest-free loan from the tax authority. Use **asset location**: bonds and high-turnover strategies in sheltered vehicles, index equities in taxable accounts. Harvest losses. And treat estate planning with the seriousness of a major allocation decision, because a generational transfer moves more wealth than most market cycles.\n\nNone of these require a market view. They are return-free wealth preservation: guaranteed points of net compounding available to any family disciplined enough to collect them.",
      whyItWorks:
        "All four cuts act on the same quantity — the net real compounding rate per heir — and they multiply rather than add. Wealth per heir grows at roughly (real return − taxes − fees − spending), divided by the heir count each generation. Because the sustainable margin is only ~3 points wide, a 1-point cut anywhere removes a third of everything downstream. Small percentages against a small margin are large fractions.",
      strategies: ["Compare to the margin, not the principal", "Multiply the small factors"],
      keyPoints: [
        "Division among heirs splits capital 8-27x over three generations before markets do anything",
        "With ~3% sustainable spending, a 1% all-in fee load consumes a third of the family's spendable income forever",
        "Fee negotiation, low turnover, asset location, loss harvesting, and estate planning are return-free wealth preservation",
      ],
    },
    {
      heading: "Governance is the real inheritance",
      body:
        "'Shirtsleeves to shirtsleeves in three generations' is not a law of nature. The data reflects families that passed on money without passing on the **operating system**. The heirs inherited assets and improvised the decisions — and improvisation under stress is how fortunes die.\n\nThe governance layer is short enough to write down:\n\n- A written **Investment Policy Statement**: target allocation, rebalancing bands, the spending rule, and a pre-agreed crash protocol.\n- A **decision journal**: every major decision recorded with its reasoning *before* the outcome is known. The family judges itself on decision quality, not results.\n- **Pre-agreed crash behaviour**, committed to in calm markets: what gets rebalanced, what gets cut, what is never sold.\n- An **annual policy review** on a fixed date — never mid-panic.\n- **Education of the next generation** in this framework, years before they control money.\n\nThe whole course compresses to one page, re-run annually: 1) total family balance sheet; 2) humble, current-conditions return estimates; 3) an agreed family gamma; 4) Merton share → policy portfolio with bands; 5) diversify any concentration beyond its justification; 6) spending ≤ real geometric return − buffer, smoothed; 7) minimize fees and taxes relentlessly; 8) never lever into forced selling; 9) rebalance mechanically; 10) judge decisions, not outcomes.\n\nThe missing billionaires didn't lack opportunities. They lacked this page.",
      strategies: ["Separate process from outcome", "Write the plan before the storm"],
      keyPoints: [
        "An Investment Policy Statement turns the framework into standing family law: targets, bands, spending rule, crash protocol",
        "A decision journal — reasoning written before outcomes — lets the family judge decision quality, not luck",
        "'Shirtsleeves in three generations' describes families that transferred money without the operating system; teach the framework, not just the balance",
      ],
    },
  ],
  quiz: [
    {
      id: "famoffice-q1",
      question:
        "Under the endowment model, a family's sustainable perpetual spending rate is anchored to which quantity?",
      options: [
        "The portfolio's expected arithmetic return",
        "The portfolio's expected real geometric return, minus a safety buffer",
        "The historical average endowment payout of 5%",
        "The yield produced by the bond portion of the portfolio",
      ],
      answerIndex: 1,
      explanation:
        "Wealth compounds at the real geometric return, so that — less a buffer for estimation error and bad sequences — is all that can be spent while keeping real wealth intact forever. The arithmetic return overstates what compounding delivers, and yield is just one arbitrary slice of total return.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "famoffice-q2",
      question:
        "What is the endowment-style smoothing rule for turning a spending rate into an annual budget?",
      options: [
        "Spend a fixed dollar amount each year, adjusted for inflation",
        "Spend a fixed percentage of the latest year-end portfolio value",
        "Spend a fixed percentage of the trailing 3-year average of wealth",
        "Spend whatever dividends and interest the portfolio happens to produce",
      ],
      answerIndex: 2,
      explanation:
        "Applying the rate to the 3-year average of wealth keeps spending proportional — so it adapts and can never bankrupt the family — while diluting any single year's crash or boom across three years. Fixed-dollar rules can drive a shrunken portfolio to zero, and single-year marks make lifestyle as volatile as markets.",
      difficulty: "warmup",
      guideRef: 2,
    },
    {
      id: "famoffice-q3",
      question:
        "A family's portfolio earns a 3.5% real geometric return, and the family spends 5% of wealth each year. What happens to real family wealth?",
      options: [
        "It stays roughly constant, since 5% is below typical nominal returns",
        "It shrinks about 1.5% per year, halving roughly every 46-48 years — about once per generation",
        "It shrinks about 1.5% per year, halving roughly every 14 years",
        "It grows slowly, because spending comes out of income rather than principal",
      ],
      answerIndex: 1,
      explanation:
        "Spending a fixed fraction of wealth subtracts directly from the compounding rate: 3.5% − 5% = −1.5% per year. The rule of 72 dates the decay — 72 / 1.5 ≈ 48 years per halving — so the fortune quietly halves about once per generation with no visible crisis. Nominal returns are irrelevant; only the real rate feeds real spending.",
      difficulty: "core",
      hints: [
        "Spending a fixed fraction of wealth acts as a direct haircut on the compounding rate. Combine 3.5% and 5% into one net annual rate.",
        "The net drift is −1.5% per year. The rule of 72 works for shrinkage too: divide 72 by the rate (in percent) to get the halving time in years.",
      ],
      strategy: "Rule of 72 / doubling times",
      guideRef: 0,
    },
    {
      id: "famoffice-q4",
      question:
        "A portfolio has a 5% expected real arithmetic return with 20% annual volatility. Approximately what real geometric (compound) return should the family plan around?",
      options: ["About 1%", "About 3%", "About 4.6%", "About 5%"],
      answerIndex: 1,
      explanation:
        "The compound return trails the arithmetic average by roughly half the variance: sigma²/2 = 0.20²/2 = 0.02, i.e. 2 percentage points, leaving about 3%. This drag is real money — a family that budgets spending off the 5% arithmetic figure is unknowingly spending down principal every year.",
      difficulty: "core",
      hints: [
        "The geometric return is approximately the arithmetic return minus half the variance: g ≈ a − sigma²/2.",
        "With sigma = 20%, write sigma² as a decimal, take half of it as the drag in return terms, and subtract that from 5%.",
      ],
      strategy: "Check the units (arithmetic vs geometric)",
      guideRef: 1,
    },
    {
      id: "famoffice-q5",
      question:
        "A family's sustainable real spending is about 3% of wealth. Its all-in fee load (advisor, funds, vehicles) is 1% of wealth per year. What fraction of the family's spendable income do fees consume?",
      options: ["Roughly 1%", "Roughly a tenth", "Roughly a third", "Roughly half"],
      answerIndex: 2,
      explanation:
        "Fees are paid from the same thin margin of real return that funds all spending, so the right comparison is 1% against the 3% sustainable budget — one dollar in three, forever. Measured against the margin rather than the principal, 'just one percent' is usually the family's largest recurring expense, which is why fee negotiation is the highest-Sharpe activity in wealth management.",
      difficulty: "core",
      hints: [
        "Don't compare the fee to the whole portfolio — compare it to the slice of return the family can actually spend each year.",
        "Sustainable spending is 3% of wealth per year; the fee is 1% of wealth per year, paid out of that same margin. What fraction of 3 is 1?",
      ],
      strategy: "Compare to the margin, not the principal",
      guideRef: 3,
    },
    {
      id: "famoffice-q6",
      question:
        "A fortune passes down through three generations, with the estate divided equally among 3 children at each handoff. Ignoring investment returns, what share of the original capital does one great-grandchild inherit?",
      options: ["About 1/3", "About 1/9", "About 1/27", "About 1/81"],
      answerIndex: 2,
      explanation:
        "Each handoff multiplies the number of slices: 3 × 3 × 3 = 27, so a single great-grandchild's line holds 1/27 of the founder's capital before markets, taxes, or spending do anything at all. This is why the endowment math must work per heir — division is a silent 8x-27x headwind over three generations that the portfolio has to outrun.",
      difficulty: "core",
      hints: [
        "Track one great-grandchild's slice through the family tree. Each generational handoff multiplies the number of ways the capital is divided.",
        "Three heirs per generation and three handoffs: the total divisor is 3 × 3 × 3.",
      ],
      strategy: "Try small cases",
      guideRef: 3,
    },
    {
      id: "famoffice-q7",
      question:
        "A $100M family portfolio earns a 3.5% real geometric return. The family spends 3% of wealth per year and pays 1% in all-in fees. Roughly where is real wealth after a century?",
      options: [
        "Down about 40%, to roughly $60M",
        "Roughly flat at $100M — spending is below the return",
        "Up modestly, to roughly $140M",
        "Down two halvings, to roughly $25M",
      ],
      answerIndex: 0,
      explanation:
        "Return, spending, and fees all act on the same net rate: 3.5% − 3% − 1% = −0.5% per year. Compounded for 100 years, 0.995^100 ≈ 0.61, so about $60M remains — a 40% real loss with no crash, no scandal, and a spending rate that looked sustainable before fees. The fee load alone flipped a viable plan into a scheduled decline.",
      difficulty: "challenge",
      hints: [
        "Three flows act on the pot every year: the real geometric return in, spending out, fees out. Combine them into a single net annual rate first.",
        "The net rate is 3.5% − 3% − 1% = −0.5% per year. The question is what a century of that does.",
        "Rule of 72: at 0.5% per year, a halving takes roughly 144 years, so 100 years is only about 70% of the way to one halving. Use that to bracket 0.995^100.",
      ],
      strategy: "Reduce to one net rate",
      guideRef: 3,
    },
    {
      id: "famoffice-q8",
      question:
        "A founder's fortune compounds at +1% real per year net of all spending, fees, and taxes. The estate is split equally between 2 children at each generational handoff, with handoffs every 30 years. After 3 generations (90 years), how does one great-grandchild's wealth compare with the founder's?",
      options: [
        "About 2.5x the founder's fortune — compounding wins",
        "About 30% of the founder's fortune — division outruns the growth",
        "About the same as the founder's fortune — the forces cancel",
        "About 12% of the founder's fortune — both forces cut against the heirs",
      ],
      answerIndex: 1,
      explanation:
        "Growth multiplies the pot by 1.01^90 ≈ 2.45, while division splits it 2 × 2 × 2 = 8 ways, leaving each great-grandchild about 2.45/8 ≈ 0.31 — roughly 30% of the founder's wealth. A genuinely positive net compounding rate still loses to modest family growth: to keep heirs whole, per-heir wealth must compound at roughly ln(2)/30 ≈ 2.3% per year just to offset a doubling headcount each generation.",
      difficulty: "challenge",
      hints: [
        "Two opposing forces: compounding multiplies each branch's wealth, while estate division multiplies the number of branches. Compute each factor separately.",
        "Growth: +1% real for 90 years. Rule of 72: one doubling takes ~72 years, so 90 years is about 1.25 doublings — call it roughly 2.4x-2.5x.",
        "Division: 2 heirs per generation across 3 handoffs means 2 × 2 × 2 = 8 slices. Now combine the growth factor with the split.",
      ],
      strategy: "Decompose into competing forces",
      guideRef: 3,
    },
  ],
  interactive: "endowment-spend",
  interactiveTitle: "The Perpetuity Spending Lab",
  interactiveBlurb:
    "Pick a spending rate and a portfolio; simulate a century and see whether the family's real wealth survives the generations.",
};
