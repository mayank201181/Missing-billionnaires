import type { Topic } from "../types";

export const drawdownsLeverage: Topic = {
  id: "drawdowns-leverage",
  title: "Drawdowns, Leverage & the Arithmetic of Ruin",
  icon: "📉",
  part: "The Allocator's Track — Staying Rich",
  order: 107,
  track: "wealth",
  tagline:
    "Losses and gains are not symmetric, leverage is not linear, and the crash is rarely the crime",
  intro:
    "Making money is a return problem; staying rich is a drawdown problem. This module works through the arithmetic that governs deep losses: why a 50% drawdown demands a 100% recovery, why leverage's costs grow with the *square* of its benefits, and why a portfolio with a genuine edge can still compound to zero when it is sized badly. The case studies are instructive extremes — LTCM, where two Nobel laureates were broadly right about their trades and lost over 90% anyway, and Ed Thorp's Princeton Newport, which ran two decades without a losing year. Victor Haghani lived the first story as an LTCM founding partner; *The Missing Billionaires* is partly that tuition converted into a framework. The goal here is practical: the handful of pre-commitments that keep a temporary loss from ever becoming a permanent one.",
  guide: [
    {
      heading: "The asymmetry of loss",
      discovery: {
        problem:
          "Your portfolio falls 50% in a crash, then rallies 50% the following year. Quick — before doing any arithmetic — are you back to even? If not, where are you, and what gain would actually have been required?",
        idea:
          "You are at 75 cents on the dollar: 100 × 0.50 × 1.50 = 75. Percentage gains and losses are not symmetric, because each return applies to the wealth you have *at that moment*. Recovering from a fractional loss d requires a gain of 1/(1−d) − 1 — which grows explosively as d grows.",
      },
      body:
        "The first fact of drawdown arithmetic is that losses and the gains needed to repair them are wildly asymmetric:\n\n- A **10%** loss needs about **+11%** to recover\n- A **25%** loss needs **+33%**\n- A **50%** loss needs **+100%**\n- A **75%** loss needs **+300%**\n- A **90%** loss needs **+900%**\n\nThe formula is `recovery = 1/(1 − loss) − 1`. For small losses the required gain is only slightly bigger than the loss, which is why modest volatility feels harmless. But the function is convex: past roughly a one-third loss, the required recovery starts pulling away fast, and by the time you are down 90% you need a ten-bagger just to get back to where you started.\n\nThis is why deep drawdowns dominate long-run compounding in a way that average returns do not capture. Two portfolios with identical average returns can end in very different places if one of them visits a deep hole along the way. The practical consequence for an allocator: the far-left tail of your return distribution deserves far more of your attention per percentage point than the middle does. Avoiding the −50% year is worth more than finding an extra +2% in the good years.",
      whyItWorks:
        "If wealth falls by fraction d, you hold (1−d) of your starting wealth. To return to 1.0 you need a multiple of 1/(1−d), i.e. a gain of 1/(1−d) − 1. As d approaches 1 the denominator approaches zero, so the required gain diverges to infinity — total loss is unrecoverable at any return.",
      strategies: ["Work backwards", "Consider extremes"],
      keyPoints: [
        "Recovery gain = 1/(1 − loss) − 1: a 25% loss needs +33%, a 50% loss needs +100%, a 90% loss needs +900%",
        "The relationship is convex — deep losses become disproportionately expensive to repair",
        "Deep drawdowns, not average returns, dominate long-run compounding",
      ],
    },
    {
      heading: "Temporary versus permanent: the forced seller",
      body:
        "Markets have always recovered from crashes — eventually. So why do drawdowns destroy families? Because a mark-to-market loss is only *temporary* for the investor who is still holding when the recovery arrives. The crime is rarely the crash itself; it is being a **forced seller inside it**, which converts a paper loss into a permanent one at the worst possible price.\n\nThree mechanisms do the forcing:\n\n- **Margin calls.** Borrowed money gives your lender the right to liquidate you at the bottom. The call arrives precisely when prices are most distressed, by construction.\n- **Spending needs.** A family that must raise cash for living expenses, tax bills, or capital calls during a 50% drawdown sells assets at half price — and each dollar of spending consumes twice the shares it did at the top.\n- **Panicking people.** Relatives, trustees, and boards who demand to 'stop the bleeding' at the low are functionally identical to a margin call, just delivered over dinner instead of by the prime broker.\n\nNote what all three have in common: none of them are investment views. Nobody in these stories decided the market was overvalued. They sold because they *had to* — structurally, financially, or emotionally. Drawdown control is therefore mostly about designing your affairs so that no plausible crash can put you in the forced-seller's chair.",
      strategies: ["Separate temporary from permanent"],
      keyPoints: [
        "A drawdown is temporary until a forced sale makes it permanent",
        "The three forcing mechanisms: margin calls, spending needs, and panicking stakeholders",
        "Forced selling is structural, not a view — so the defence is structural too",
      ],
    },
    {
      heading: "Leverage: linear reward, squared drag",
      discovery: {
        problem:
          "A portfolio earns mu = 8% per year with volatility sigma = 20%. You lever it 4x with free borrowing, so your expected return is 4 × 8% = 32% per year. Over 20 years, should you expect to compound at something near 32% — and roughly what does your long-run growth rate actually turn out to be?",
        idea:
          "Roughly **zero**. Long-run compound growth at leverage L is g(L) = L*mu − L²*sigma²/2. The return term scales linearly with L, but the volatility drag scales with L *squared*. Here g(4) = 0.32 − 16 × 0.04/2 = 0.32 − 0.32 = 0. Quadrupling a good portfolio's risk erased its entire edge.",
      },
      body:
        "The compound (geometric) growth rate of a levered portfolio is approximately:\n\n`g(L) = L*mu − L²*sigma²/2`\n\nwhere L is leverage, mu the unlevered expected return, and sigma the unlevered volatility. Read the two terms separately. The reward term `L*mu` is **linear**: 2x leverage, 2x expected return. The drag term `L²*sigma²/2` is **quadratic**: 2x leverage, 4x drag. That mismatch is the whole story of leverage.\n\nBecause a parabola opens downward, g(L) has a peak: the **growth-optimal leverage** L* = mu/sigma², which is exactly the Kelly point. With mu = 8% and sigma = 20%, L* = 0.08/0.04 = 2. Push past the peak and growth *falls*: g(3) = 6%, the same as no leverage at all — triple the risk for zero extra growth. At exactly **2L*** growth returns to zero, and beyond that a genuinely positive-edge portfolio compounds downhill with certainty.\n\nAnd the formula flatters leverage, because it describes an investor who is never interrupted. Real leverage adds **path dependence**: with borrowed money you can be right about the destination and dead before arrival, because the margin call arrives at the bottom of the path, not the top. The smooth parabola says 2L* is where growth dies; the path says you may not survive long before that.",
      whyItWorks:
        "Volatility drag exists because compounding multiplies returns rather than adding them: a +x then −x sequence leaves you at 1 − x², below even. The size of that shortfall grows with the variance of returns, and levering by L multiplies volatility by L, hence variance — and drag — by L². A linear benefit fighting a quadratic cost must eventually lose.",
      strategies: ["Compute before you commit", "Think in paths, not averages"],
      keyPoints: [
        "g(L) = L*mu − L²*sigma²/2: return scales with L, drag with L squared",
        "Growth peaks at the Kelly point L* = mu/sigma² and hits zero at 2L*; beyond that, positive edge compounds downhill",
        "The formula understates the danger — path dependence means margin calls can end the game before the math plays out",
      ],
    },
    {
      heading: "Two masters, two endings: LTCM and Thorp",
      body:
        "**Long-Term Capital Management, 1998.** A fund whose partners included two Nobel laureates, running convergence trades that were — by many measures — genuinely good. The sizing was the problem: leverage of roughly **25-to-1**. When spreads widened in the summer of 1998, the fund lost over 90% of its capital in a few months and had to be rescued and wound down. The bitter epilogue is the point: the trades largely **converged afterwards**, almost exactly as modelled. LTCM was right on selection and dead on sizing. Victor Haghani was a founding partner; the framework in *The Missing Billionaires* is, in part, that tuition converted into method.\n\n**Ed Thorp's Princeton Newport Partners** is the counter-example. It ran for roughly **20 years — including October 1987 — without a single losing year**, not because Thorp's edges were bigger than LTCM's, but because position sizing and ruin-avoidance came *before* returns in his process. Thorp fractionally-Kelly'd everything, capped exposures, and treated survival as the binding constraint. The same scepticism showed up off the field: after due diligence on Bernie Madoff's operation, Thorp concluded the returns were fake and walked away. Scepticism about too-good numbers is part of drawdown control too — the deepest drawdown of all is the one where the assets were never there.\n\nSame quantitative tradition, same era, opposite endings. The difference was never intelligence or edge. It was the order of operations: survival first, then growth.",
      keyPoints: [
        "LTCM: right on trade selection, roughly 25x levered, down 90%+ in months — and the trades converged after its death",
        "Princeton Newport: ~20 years, no losing year, because sizing and ruin-avoidance preceded return-seeking",
        "Thorp's walking away from Madoff shows scepticism is a drawdown-control tool",
      ],
    },
    {
      heading: "The family playbook — and when to stop playing",
      body:
        "Drawdown discipline for a family is mostly **pre-crash architecture**, not in-crash heroics:\n\n- **Hold 2-5 years of planned spending in a safe bucket.** Cash and short high-grade bonds sized to your actual burn rate mean no plausible bear market can make you a forced seller.\n- **No leverage against illiquid or concentrated assets.** A margin loan against the family company or a building combines the forced-seller mechanism with the assets least able to absorb it.\n- **Cap the risky share at your Merton share.** Drawdown control is mostly pre-crash sizing; if the allocation was right for your risk aversion before the crash, the crash doesn't change it.\n- **Pre-write crash behaviour in your Investment Policy Statement.** Rebalance *into* weakness on pre-set bands. Never 'sell to the sleeping point' mid-panic — that is outcome-chasing at the worst price of the cycle.\n\nThen the endgame principle. William Bernstein: *'If you've won the game, stop playing.'* As wealth grows relative to needs, the utility of each extra dollar falls, while the pain of a given percentage loss stays roughly constant. So it is *rational* to derisk after success — the exact opposite of the house-money instinct to press harder because you're playing with winnings. The families who vanished mostly did the instinctive thing. The ones who endure treat 'enough' as a trigger to take risk off, not to add it.",
      whyItWorks:
        "With declining marginal utility, the dollars a loss would take from you are always worth more per dollar than the ones a gain would add. When wealth is far above needs, incremental dollars buy almost no extra utility, but a 50% loss still threatens the spending the family actually relies on. The expected-utility calculation therefore shifts toward safety precisely when you can most 'afford' risk in accounting terms.",
      strategies: ["Pre-commit before the storm", "Work backwards"],
      keyPoints: [
        "Safe bucket of 2-5 years' spending = structural immunity from forced selling",
        "Sizing at the Merton share before the crash matters more than anything you do during it",
        "Pre-written rules: rebalance into weakness on bands, never panic-sell to the sleeping point",
        "As wealth outgrows needs, derisking is rational — the opposite of the house-money instinct",
      ],
    },
  ],
  quiz: [
    {
      id: "drawdown-q1",
      question:
        "Your portfolio falls 25%. Roughly what gain is required to get back to even?",
      options: ["+25%", "+33%", "+50%", "+75%"],
      answerIndex: 1,
      explanation:
        "After a 25% loss you hold 75% of your starting wealth, and 1/0.75 ≈ 1.33 — a gain of about 33%. Losses and recovery gains are asymmetric because each return applies to current wealth, not starting wealth, and the asymmetry grows convexly with the size of the loss.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "drawdown-q2",
      question:
        "In this framework, what usually converts a temporary mark-to-market loss into a permanent one?",
      options: [
        "Being a forced seller inside the drawdown",
        "The sheer depth of the crash itself",
        "Failing to buy more at the bottom",
        "Holding too much of the portfolio in index funds",
      ],
      answerIndex: 0,
      explanation:
        "A paper loss stays temporary for the investor still holding when recovery arrives. Margin calls, spending needs, and panicking stakeholders force sales at distressed prices, crystallising the loss permanently. The crime is rarely the crash — it's being structurally unable to sit through it.",
      difficulty: "warmup",
      guideRef: 1,
    },
    {
      id: "drawdown-q3",
      question:
        "A concentrated position falls 40%. What gain does it need to recover its starting value?",
      options: ["+40%", "+50%", "+67%", "+80%"],
      answerIndex: 2,
      explanation:
        "After a 40% loss you hold 0.60 of starting wealth, and 1/0.60 ≈ 1.67, so about +67% is required. Note the gap between loss and required recovery has already widened from 8 points (at a 25% loss) to 27 points here — the convexity is accelerating.",
      difficulty: "core",
      hints: [
        "You need the multiple that takes 0.60 of your wealth back up to 1.00.",
        "That multiple is 1/(1 − 0.40) = 1/0.60. Convert that multiple into a percentage gain.",
      ],
      strategy: "Work backwards",
      guideRef: 0,
    },
    {
      id: "drawdown-q4",
      question:
        "A portfolio has mu = 6% and sigma = 20%. Using g(L) = L*mu − L²*sigma²/2, at what leverage does the long-run compound growth rate fall all the way back to zero?",
      options: ["1.5x", "2.0x", "3.0x", "6.0x"],
      answerIndex: 2,
      explanation:
        "The growth-optimal leverage is L* = mu/sigma² = 0.06/0.04 = 1.5, and because g(L) is a symmetric downward parabola, growth returns to zero at exactly 2L* = 3.0. Beyond 3x, this genuinely positive-edge portfolio compounds downhill with certainty.",
      difficulty: "core",
      hints: [
        "First find the growth-optimal (Kelly) leverage: L* = mu/sigma². Start by computing sigma².",
        "sigma = 20%, so sigma² = 0.04. Compute L* = 0.06/0.04.",
        "The parabola g(L) is symmetric around its peak, so growth hits zero at exactly twice L*.",
      ],
      strategy: "Compute before you commit",
      guideRef: 2,
    },
    {
      id: "drawdown-q5",
      question:
        "LTCM's convergence trades largely converged after the fund's collapse, roughly as its models predicted. What is the lesson the book draws from this?",
      options: [
        "The models were wrong and quantitative investing is unreliable",
        "Selection was right but sizing was fatal — leverage meant the fund couldn't survive the path to being proven correct",
        "The trades were bad and only luck made them converge later",
        "The rescue came too early; with more patience the fund would have recovered on its own",
      ],
      answerIndex: 1,
      explanation:
        "At roughly 25-to-1 leverage, a temporary widening of spreads consumed the fund's capital before convergence arrived — over 90% lost in months. Since the trades ultimately worked, the failure is isolated to a single variable: position size. Being right about the destination is worthless if leverage kills you along the path.",
      difficulty: "core",
      hints: [
        "Separate two questions: were the trades good, and was the fund able to hold them to maturity?",
        "If the trades eventually converged as modelled, what remaining decision could have caused a 90%+ loss?",
      ],
      strategy: "Separate temporary from permanent",
      guideRef: 3,
    },
    {
      id: "drawdown-q6",
      question:
        "The formula g(L) = L*mu − L²*sigma²/2 already shows leverage's drag. Why does it still understate leverage's real-world danger?",
      options: [
        "It ignores taxes on the borrowed amount",
        "It assumes mu and sigma are known, when they must be estimated",
        "It overstates volatility drag for diversified portfolios",
        "It ignores path dependence — margin calls can force liquidation at the bottom, ending the game before long-run growth applies",
      ],
      answerIndex: 3,
      explanation:
        "The formula describes an investor who is never interrupted and compounds forever. Real borrowed money comes with a lender who can liquidate you at the trough — precisely when prices are worst. So you can hold a portfolio whose long-run g(L) is comfortably positive and still be permanently ruined by one bad path. Estimation error (option B) is a real issue too, but it isn't what the formula structurally omits about leverage.",
      difficulty: "core",
      hints: [
        "The formula gives a long-run average growth rate. Ask what has to be true for you to actually earn a long-run average.",
        "Who, besides you, can decide to close a levered position — and at what point in the path do they typically decide it?",
      ],
      strategy: "Think in paths, not averages",
      guideRef: 2,
    },
    {
      id: "drawdown-q7",
      question:
        "A portfolio has mu = 8% and sigma = 20%. Using g(L) = L*mu − L²*sigma²/2, what is the long-run compound growth rate at 3x leverage — and how does it compare with the unlevered rate?",
      options: [
        "About 6% — identical to the unlevered growth rate, despite triple the risk",
        "About 8% — the maximum this portfolio can achieve",
        "About 12% — half the naive 24% expectation",
        "About 0% — 3x is the zero-growth leverage here",
      ],
      answerIndex: 0,
      explanation:
        "g(3) = 3 × 0.08 − 9 × 0.04/2 = 0.24 − 0.18 = 0.06, while g(1) = 0.08 − 0.02 = 0.06 as well. Three times the risk, identical growth — because L* = 0.08/0.04 = 2, and 3x sits as far past the peak as 1x sits before it on the symmetric parabola. Growth would only hit zero at 2L* = 4x.",
      difficulty: "challenge",
      hints: [
        "Plug L = 3 into g(L) = L*mu − L²*sigma²/2, keeping the two terms separate.",
        "The return term is 3 × 8% = 24%. Now compute the drag term: L² = 9, sigma² = 0.04.",
        "Subtract the drag from the return, then also compute g(1) = mu − sigma²/2 to make the comparison.",
      ],
      strategy: "Compute before you commit",
      guideRef: 2,
    },
    {
      id: "drawdown-q8",
      question:
        "An investor runs 2x leverage (2 dollars of market exposure per 1 dollar of equity, financed with 1 dollar of debt). The market falls 30% and the position is held throughout. Roughly what happens to the investor's equity, and what recovery does that equity then need to reach its starting value?",
      options: [
        "Equity falls 30% and needs about +43% to recover",
        "Equity falls 45% and needs about +82% to recover",
        "Equity falls 60% and needs +150% to recover",
        "Equity falls 60% and needs +60% to recover",
      ],
      answerIndex: 2,
      explanation:
        "Start with 100 equity, 200 of assets, 100 of debt. The market's 30% fall takes assets to 140; debt is still 100, so equity is 40 — a 60% loss, double the market's because the debt doesn't shrink. Recovery needs 100/40 = 2.5x, i.e. +150%, versus the roughly +43% an unlevered holder needs. Leverage doubled the loss but nearly quadrupled the required recovery — the loss asymmetry and the leverage multiplier compound each other.",
      difficulty: "challenge",
      hints: [
        "Set up a balance sheet: 100 equity, 200 assets, 100 debt. Apply the 30% fall to the assets only.",
        "Debt doesn't fall when markets do. Assets go to 140, debt stays at 100 — what is equity now?",
        "Equity went from 100 to 40. Apply the recovery formula 1/(1 − loss) − 1 to that equity loss.",
      ],
      strategy: "Work backwards",
      guideRef: 0,
    },
  ],
  interactive: "drawdown-lab",
  interactiveTitle: "The Drawdown Laboratory",
  interactiveBlurb:
    "Add leverage to a good portfolio and watch the paths: faster growth, deeper holes — and the level where the game ends.",
};
