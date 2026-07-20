import type { Topic } from "../types";

export const mertonShare: Topic = {
  id: "merton-share",
  title: "The Merton Share",
  icon: "⚖️",
  part: "Part III — Sizing",
  order: 6,
  tagline: "One formula that turns 'how much risk?' from a vibe into a calculation",
  intro:
    "This is the centrepiece of the book. In 1969, Robert Merton solved the problem every investor faces but almost nobody computes: what fraction of your wealth belongs in a risky asset versus a safe one? For an investor with constant relative risk aversion, the answer is a single, compact formula — the Merton share: k = (mu − r) / (gamma * sigma^2). Feed in the asset's expected excess return, its volatility, and your own risk aversion, and out comes your optimal allocation. Everything else in the book — Kelly betting, spending rules, insurance decisions — is a variation on this one result. This topic builds the formula, shows why it works, drills how it responds when each input changes, and covers the crucial asymmetry: why taking too much risk is far more dangerous than taking too little.",
  guide: [
    {
      heading: "Merton's answer to 'how much?'",
      discovery: {
        problem:
          "You can split your wealth between a safe asset yielding r and the stock market, which you believe offers an expected excess return of 5% per year with 20% volatility. Before reading on: what fraction of your wealth would you put in stocks — and, more importantly, what *inputs* should that fraction even depend on?",
        idea:
          "Robert Merton answered this in 1969. For an investor with constant relative risk aversion (CRRA), the optimal fraction of wealth in the risky asset is `k = (mu - r) / (gamma * sigma^2)` — the expected excess return, divided by your risk aversion times the *variance* of returns. With a 5% premium, 20% volatility (variance 0.04), and gamma = 2, that's 0.05 / (2 * 0.04) = **62.5%** in stocks. Not a convention, not a rule of thumb — a computation from three inputs.",
      },
      body:
        "The Merton share is the book's master formula. It says your optimal allocation to a risky asset depends on exactly three things:\n\n- **mu − r**: the asset's expected return *above* the safe rate — the reward for holding it\n- **sigma**: the asset's volatility, entering as *variance* (sigma^2) — the price you pay in risk\n- **gamma**: your personal relative risk aversion — how much that price hurts *you*\n\nNothing else appears. Not your age, not what the market did last year, not what your neighbours hold. The baseline example is worth memorizing: a 5% equity risk premium and 20% volatility give a variance of 0.04, so an investor with gamma = 2 (a typical, moderately risk-averse value) should hold 0.05 / (2 * 0.04) = 62.5% in equities.\n\nNotice what the formula does *not* say. It doesn't tell you which asset is best — it presumes you've formed an estimate of mu and sigma. It answers the question the book argues actually dominates outcomes: given your beliefs, **how much**?",
      strategies: ["Reduce a decision to its true inputs"],
      keyPoints: [
        "Merton (1969): optimal risky fraction k = (mu − r) / (gamma * sigma^2) for a CRRA investor",
        "Only three inputs: excess return, variance, and your risk aversion — nothing else",
        "Baseline: 5% premium, 20% vol, gamma = 2 gives k = 62.5%",
      ],
    },
    {
      heading: "Why the formula works",
      body:
        "The derivation is short enough to carry in your head, and worth doing because it explains everything about how the formula behaves.\n\nHold a fraction k of wealth in the risky asset. Your expected extra growth is simply proportional to k: you pick up `k * (mu - r)`. But risk imposes a *utility cost* — the drag on your certainty-equivalent growth — of approximately `0.5 * gamma * k^2 * sigma^2`. The crucial feature: the benefit is **linear** in k, while the cost is **quadratic**. Double your position and you double the reward but *quadruple* the pain.\n\nSo your certainty-equivalent growth is roughly:\n\n`CE(k) = k * (mu - r) - 0.5 * gamma * k^2 * sigma^2`\n\nA rising straight line minus an accelerating parabola. At small k, the line wins and more risk is worth taking; at large k, the parabola wins and more risk destroys value. Somewhere in between sits a peak.\n\nAt the optimum, the prize is `(mu - r)^2 / (2 * gamma * sigma^2)` — equivalently `Sharpe^2 / (2 * gamma)`. With a Sharpe ratio of 0.25 and gamma = 2, that's about 1.56% per year of certainty-equivalent growth: the entire economic value, to you, of the equity market's existence.",
      whyItWorks:
        "Maximize CE(k) = k * (mu − r) − 0.5 * gamma * k^2 * sigma^2 by setting its derivative to zero: (mu − r) − gamma * k * sigma^2 = 0, which gives k = (mu − r) / (gamma * sigma^2). The linear-benefit-versus-quadratic-cost structure is the whole story: the optimum sits exactly where the marginal reward of one more unit of exposure equals its marginal utility cost.",
      strategies: ["Marginal benefit = marginal cost"],
      keyPoints: [
        "Benefit of exposure is linear in k; utility cost is quadratic in k",
        "Setting the derivative to zero yields the Merton share directly",
        "The value of investing optimally is Sharpe^2 / (2 * gamma) in certainty-equivalent growth",
      ],
    },
    {
      heading: "How the dial responds",
      discovery: {
        problem:
          "Start from the baseline: 5% premium, 20% volatility, gamma = 2, so k = 62.5%. Now suppose volatility halves to 10% while the premium stays at 5%. Most people guess the allocation should roughly double. What does the formula actually say?",
        idea:
          "It *quadruples*. Volatility enters as variance: halving sigma from 20% to 10% cuts sigma^2 from 0.04 to 0.01, so k jumps from 62.5% to 250%. The Merton share is inverse in **variance, not volatility** — allocations are far more sensitive to risk estimates than intuition suggests.",
      },
      body:
        "Because the formula is so simple, its comparative statics — how k moves when each input moves — are exact, and each one is an exam favourite:\n\n- **Linear in the risk premium.** Halve mu − r and you halve k. If a high-CAPE market cuts your premium estimate from 5% to 2.5%, your 62.5% becomes 31.25%. No cleverness required.\n- **Inverse in variance, not volatility.** Halve sigma and k goes up **4x**; double sigma and k drops to a **quarter**. This is why volatility spikes justify sharp de-risking, not marginal trims.\n- **Inverse in gamma.** An investor with gamma = 4 holds exactly half the risky share of an investor with gamma = 2, facing identical markets. Two rational people *should* hold different portfolios.\n- **Gamma = 1 recovers Kelly.** Log utility (gamma = 1) gives k = (mu − r) / sigma^2 — the growth-optimal Kelly allocation. Kelly is not a rival framework; it's the Merton share for one particular, quite aggressive, risk tolerance. Most people's gamma is 2 or 3, so most people should hold a half or a third of Kelly.",
      strategies: ["Vary one input at a time", "Consider extremes"],
      keyPoints: [
        "k is linear in the premium: halve mu − r, halve the allocation",
        "k is inverse in variance: halve sigma, allocation quadruples; double sigma, it quarters",
        "Kelly betting is the special case gamma = 1; typical investors should hold a fraction of Kelly",
      ],
    },
    {
      heading: "A moving target, not a set-and-forget",
      body:
        "The formula's most practical implication is also its most neglected: since k depends on the expected risk premium, **your equity share should move as expected returns move**. When equities are cheap and the premium implied by measures like CAPE-based earnings yields is high, the formula says hold more; when markets are expensive and the prospective premium is thin, it says hold less. A rational allocation is a *policy* — a function of conditions — not a number.\n\nContrast this with what most investors actually do: hold a static share fixed by convention. A 60/40 portfolio, a '100 minus your age' rule, whatever the default target-date fund happens to be. None of these respond to *any* of the three inputs — not expected returns, not volatility, not the individual's own risk aversion. They are answers unconnected to any question.\n\nOne honest wrinkle: sometimes the formula returns k > 1. A generous premium, low volatility, and modest risk aversion can imply 120% or 150% in equities — a levered position. The book's advice is pragmatic: the formula tells you the direction and the ceiling of your appetite, but in practice you cap k at what you can actually borrow, afford, and — critically — *stomach* through a drawdown. A levered position you'll abandon at the bottom is worse than an unlevered one you can hold.",
      strategies: ["Turn a number into a policy"],
      keyPoints: [
        "Because k depends on mu − r, your allocation should change as expected returns change",
        "Conventional static rules (60/40, age-based) ignore all three inputs of the formula",
        "When k > 1 the math says lever — in practice, cap at what you can borrow and stomach",
      ],
    },
    {
      heading: "The flat peak and the cliff",
      body:
        "How precisely must you get k right? Here the utility curve delivers one comforting message and one stark warning.\n\nThe comfort: near the optimum, the curve is **flat**. Because you're at a maximum, small errors have second-order costs — holding 50% or 75% when the true optimum is 62.5% sacrifices only a sliver of the benefit. You don't need decimal-point precision in your estimates of mu, sigma, or gamma. The formula is forgiving of *modest* error.\n\nThe warning: the forgiveness is brutally **asymmetric**. Run the certainty-equivalent formula at k = 2 * k*, twice the optimal share: the doubled linear benefit is *exactly* cancelled by the quadrupled quadratic cost, leaving a certainty equivalent of zero — the same as holding nothing but the safe asset. All that risk, for literally no expected benefit in utility terms. And beyond 2x, the certainty equivalent turns *negative*: you'd be better off never investing at all.\n\nUndersizing by half costs you a modest fraction of the prize; oversizing by the same factor of two costs you *all* of it. This asymmetry, plus the fact that mu is the input you know least — expected returns are far harder to estimate than volatility — yields the book's closing counsel on sizing: **when uncertain, err toward the conservative side of your best estimate.** The penalty for timidity is mild; the penalty for overreach is ruinous.",
      whyItWorks:
        "Evaluate CE(k) = k * (mu − r) − 0.5 * gamma * k^2 * sigma^2 at k = 2k*. The benefit term doubles, but the cost term scales with k^2 and so quadruples: CE(2k*) = 2k*(mu − r) − 2 * gamma * k*^2 * sigma^2, and substituting k* = (mu − r)/(gamma * sigma^2) makes the two terms equal — CE is exactly zero. Symmetric percentage errors in k are not symmetric in consequence, because the quadratic cost term grows faster on the upside than the linear benefit.",
      strategies: ["Consider extremes", "Stress-test the boundary"],
      keyPoints: [
        "Near the optimum the utility curve is flat: being ~20% off costs very little",
        "At exactly 2x the optimal share, the entire benefit is gone — same certainty equivalent as all-safe",
        "Beyond 2x, you're worse off than never investing; oversizing is far more dangerous than undersizing",
        "Since mu is the most uncertain input, size toward the conservative side",
      ],
    },
  ],
  quiz: [
    {
      id: "merton-q1",
      question: "Which formula gives the Merton share — the optimal fraction of wealth in the risky asset?",
      options: [
        "k = (mu − r) / (gamma * sigma)",
        "k = (mu − r) / (gamma * sigma^2)",
        "k = gamma * sigma^2 / (mu − r)",
        "k = (mu + r) / (2 * sigma)",
      ],
      answerIndex: 1,
      explanation:
        "The excess return mu − r is divided by risk aversion times *variance* (sigma squared), not volatility. The variance in the denominator is what makes the share so sensitive to changes in risk: halving volatility quadruples the allocation.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "merton-q2",
      question: "Which of the following is NOT an input to the Merton share?",
      options: [
        "The risky asset's expected excess return over the safe rate",
        "The risky asset's volatility",
        "Your personal risk aversion (gamma)",
        "Your age",
      ],
      answerIndex: 3,
      explanation:
        "The formula depends on exactly three things: the excess return, the variance, and your risk aversion. Age-based rules like '100 minus your age' are conventions unconnected to any of these inputs — which is precisely the book's complaint about them.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "merton-q3",
      question:
        "The equity risk premium is 5%, equity volatility is 20%, and your risk aversion is gamma = 2. What is your Merton share?",
      options: ["12.5%", "31.25%", "62.5%", "125%"],
      answerIndex: 2,
      explanation:
        "Volatility of 20% means variance of 0.2^2 = 0.04. So k = 0.05 / (2 * 0.04) = 0.05 / 0.08 = 0.625, or 62.5%. This is the book's baseline example and a useful anchor for every other calculation in the topic.",
      difficulty: "core",
      hints: [
        "First convert volatility to variance — the formula uses sigma squared.",
        "Variance = 0.2^2 = 0.04. Now compute the denominator: gamma * variance.",
        "k = 0.05 / (2 * 0.04) = 0.05 / 0.08. What fraction is that?",
      ],
      strategy: "Careful substitution",
      guideRef: 0,
    },
    {
      id: "merton-q4",
      question:
        "Starting from the baseline (5% premium, 20% vol, gamma = 2, k = 62.5%), a rise in valuations cuts your estimate of the equity risk premium in half, to 2.5%. What is your new Merton share?",
      options: ["15.6%", "31.25%", "44.2%", "62.5%"],
      answerIndex: 1,
      explanation:
        "The Merton share is linear in the risk premium: halve mu − r and you halve k, from 62.5% to 31.25%. Directly: 0.025 / (2 * 0.04) = 0.3125. This is the mechanism by which a rational allocation responds to market valuations like CAPE.",
      difficulty: "core",
      hints: [
        "Only the numerator of the formula changed. How does k scale with the numerator?",
        "k is proportional to the premium: half the premium means half the share.",
        "Check: 0.025 / 0.08 = 0.3125.",
      ],
      strategy: "Vary one input at a time",
      guideRef: 2,
    },
    {
      id: "merton-q5",
      question:
        "Volatility falls from 20% to 10% while the risk premium and your risk aversion stay the same. What happens to your Merton share?",
      options: [
        "It doubles",
        "It stays the same, since the premium hasn't changed",
        "It halves",
        "It quadruples",
      ],
      answerIndex: 3,
      explanation:
        "The share is inverse in *variance*, not volatility. Halving sigma cuts sigma^2 to a quarter (0.04 to 0.01), so k rises 4x — from 62.5% to 250% in the baseline case. The squared term is why risk estimates move allocations much more violently than most people's intuition expects.",
      difficulty: "core",
      hints: [
        "Does sigma enter the formula directly, or as sigma squared?",
        "Halving sigma changes sigma^2 from 0.04 to 0.01 — a factor of 4, not 2.",
        "A denominator that shrinks 4x makes the whole fraction grow 4x.",
      ],
      strategy: "Consider extremes",
      guideRef: 2,
    },
    {
      id: "merton-q6",
      question:
        "What is the book's core objection to conventional allocations like 60/40 or '100 minus your age'?",
      options: [
        "They allocate too much to bonds for young investors",
        "They ignore all three Merton inputs — the share never responds to expected returns, volatility, or the individual's risk aversion",
        "They require too much rebalancing to be practical",
        "They are only optimal for investors with log utility",
      ],
      answerIndex: 1,
      explanation:
        "A rational allocation is a function of the expected premium, the variance, and your gamma — so it should differ across people and move as market conditions move. Static conventional shares are fixed numbers chosen by habit, connected to none of the inputs that actually determine the optimum. They may accidentally be close to right, but only by coincidence.",
      difficulty: "core",
      hints: [
        "List the three inputs of the Merton share. Which of them does a fixed 60/40 rule respond to?",
        "A static share stays put when expected returns, volatility, or the holder's risk tolerance change — is that consistent with the formula?",
      ],
      strategy: "Reduce a decision to its true inputs",
      guideRef: 3,
    },
    {
      id: "merton-q7",
      question:
        "An asset offers a 3.6% expected excess return with 15% volatility. For an investor with gamma = 2, what is the Merton share?",
      options: ["40%", "53%", "80%", "107%"],
      answerIndex: 2,
      explanation:
        "Variance = 0.15^2 = 0.0225, so the denominator is 2 * 0.0225 = 0.045. Then k = 0.036 / 0.045 = 0.8, an 80% allocation. Note that a *smaller* premium than the baseline still yields a *larger* share, because the lower variance in the denominator dominates — variance sensitivity again.",
      difficulty: "challenge",
      hints: [
        "Square the volatility first: 0.15^2 = ?",
        "Denominator = gamma * variance = 2 * 0.0225 = 0.045.",
        "k = 0.036 / 0.045. Multiply top and bottom by 1000: 36/45 = 4/5.",
      ],
      strategy: "Careful substitution",
      guideRef: 0,
    },
    {
      id: "merton-q8",
      question:
        "An investor holds exactly TWICE the Merton share — 2x optimal. Compared with investing optimally, what does the certainty-equivalent framework say about their position?",
      options: [
        "They keep about half the benefit, since costs scale linearly with size",
        "They keep most of the benefit, because the utility curve is flat near the peak",
        "Their certainty-equivalent benefit is exactly zero — no better than holding only the safe asset",
        "Their certainty equivalent is already negative — worse than never investing",
      ],
      answerIndex: 2,
      explanation:
        "At 2x, the linear benefit doubles but the quadratic cost quadruples: CE(2k*) = 2k*(mu − r) − 2*gamma*k*^2*sigma^2, and substituting k* = (mu − r)/(gamma*sigma^2) makes the terms cancel exactly, giving zero. All the risk, none of the reward — but not yet negative; the certainty equivalent only turns negative *beyond* 2x. The flat-peak comfort applies to small errors; a 2x error erases everything, which is why oversizing is far more dangerous than undersizing.",
      difficulty: "challenge",
      hints: [
        "Write CE(k) = k*(mu − r) − 0.5*gamma*k^2*sigma^2 and plug in k = 2k*.",
        "The first term doubles; the k^2 in the second term means the cost quadruples: 0.5 * 4 = 2.",
        "CE(2k*) = 2k*(mu − r) − 2*gamma*k*^2*sigma^2. Use k* = (mu − r)/(gamma*sigma^2) — the two terms are equal.",
      ],
      strategy: "Stress-test the boundary",
      guideRef: 4,
    },
  ],
  interactive: "merton-share",
  interactiveTitle: "The Merton Share Calculator",
  interactiveBlurb:
    "The book's master formula, live: set the risk premium, volatility, and your risk aversion, and read off your optimal allocation.",
};
