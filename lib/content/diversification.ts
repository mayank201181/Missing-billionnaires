import type { Topic } from "../types";

export const diversification: Topic = {
  id: "diversification",
  title: "Diversification: The Only Free Lunch",
  icon: "🧺",
  part: "The Allocator's Track — Portfolio Construction",
  order: 103,
  track: "wealth",
  tagline:
    "The one move that cuts risk without cutting return — and pays you twice for making it",
  intro:
    "Every other way to reduce portfolio risk costs you expected return: hold more cash, buy puts, de-lever. Diversification is the exception — combine imperfectly correlated assets and volatility falls while expected return stays put. That alone would make it worth doing, but the real payoff is subtler and larger. Lower volatility means less of the drag that separates average returns from compound returns, and — because volatility enters the Merton sizing formula *squared* — it dramatically raises how much of the risky portfolio you're allowed to own. This module works through the arithmetic of many bets, why the 21st stock buys you almost nothing while a genuinely different asset class buys a lot, what the sizing math says about concentrated positions, and how rebalancing keeps the whole machine at policy weights.",
  guide: [
    {
      heading: "Why 'free lunch' is not a figure of speech",
      discovery: {
        problem:
          "Two portfolios have the same 8% average (arithmetic) return. Portfolio A has 20% volatility; portfolio B, more diversified, has 10%. After 30 years of reinvestment, do they end up in roughly the same place? Estimate before reading on.",
        idea:
          "No — and it isn't close. Compound growth is approximately mu − sigma²/2. Portfolio A compounds at about 8% − 0.04/2 = 6% per year; B at about 8% − 0.01/2 = 7.5%. Same average return, but B's wealth pulls ahead by roughly 1.5 percentage points *per year*, forever. Volatility is not just discomfort — it is a direct tax on compounding, and diversification is the only way to cut the tax without cutting the average.",
      },
      body:
        "Diversification is the only technique in investing that reduces risk **without reducing expected return**. Hold ten assets, each with the same expected return as your single favourite, and the portfolio's expected return is unchanged — it's the average of the parts. But unless the assets move in lockstep, the ups and downs partially cancel, and portfolio volatility comes in *below* the average of the parts. You gave up nothing and risk fell. That is the free lunch.\n\nAnd the lunch is paid twice. First, through **volatility drag**: geometric growth ≈ mu − sigma²/2, so cutting sigma at the same mu means the same average return compounds into more wealth. Second, through **sizing**: the Merton share k* = (mu − r) / (gamma × sigma²) tells you how much risky exposure to hold, and sigma enters *squared*. Halve the volatility of your risky portfolio at the same expected return and your optimal allocation to it **quadruples**. Diversification doesn't just make the ride smoother — it makes you a rationally larger investor in the very thing you diversified.",
      whyItWorks:
        "Both channels trace to the same fact: variance, not volatility, is what compounding and sizing care about. Drag is sigma²/2, and the Merton denominator is gamma × sigma². Halving sigma cuts sigma² to a quarter — so drag falls by three-quarters and the permitted position size quadruples. Small reductions in sigma buy disproportionately large improvements, which is why allocators obsess over correlation.",
      strategies: ["Look at variance, not volatility"],
      keyPoints: [
        "Diversification cuts risk at the same expected return — no other risk-reduction tool does",
        "Channel 1: lower sigma means less volatility drag (growth ≈ mu − sigma²/2), so the same average compounds faster",
        "Channel 2: sigma enters the Merton share squared — halve sigma and the optimal risky allocation quadruples",
      ],
    },
    {
      heading: "The math of many bets",
      discovery: {
        problem:
          "You hold 20 large-cap stocks, each with about 40% volatility and average pairwise correlation around 0.3. A friend says you're under-diversified and should hold 100. Roughly how much lower would portfolio volatility be with 100 stocks instead of 20? Guess before computing.",
        idea:
          "About one percentage point. With average pairwise correlation rho, an equal-weighted portfolio's variance tends to sigma² × (rho + (1 − rho)/N). At 20 stocks: 40% × sqrt(0.3 + 0.7/20) = 40% × sqrt(0.335) ≈ 23%. At 100 stocks: 40% × sqrt(0.307) ≈ 22%. The floor — sigma × sqrt(rho) ≈ 40% × sqrt(0.3) ≈ 22% — was already in sight at 20 holdings. Correlation, not the number of names, sets the limit.",
      },
      body:
        "Start with the ideal case. Combine N equal-sized assets, each with volatility sigma and **zero** correlation with the others, and portfolio volatility is sigma / sqrt(N). Twenty-five truly independent return streams at 30% volatility each would produce a 6% volatility portfolio. This is the engine behind every multi-strategy fund and every insurance business: many independent bets, each modest, aggregating into something remarkably stable.\n\nReal assets are not independent. With average pairwise correlation rho, portfolio variance approaches sigma² × (rho + (1 − rho)/N) as N grows. The (1 − rho)/N term — the diversifiable part — melts away quickly. What remains is the floor: **portfolio volatility can never fall below sigma × sqrt(rho)**, no matter how many holdings you add.\n\nThe worked example above makes the practical point: going from 20 stocks to 100 within the same market buys roughly one percentage point of volatility. The 21st stock is nearly worthless as a diversifier. The scarce ingredient is not more names — it is *low correlation*, and within a single asset class there is only so much of it to be had.",
      whyItWorks:
        "Write portfolio variance as the average of N² covariance terms. N of them are own-variances, each weighted 1/N², contributing sigma²/N in total — this shrinks toward zero. The other N² − N are cross terms averaging rho × sigma², and their total weight approaches 1. So variance → sigma² × rho: the diversifiable piece vanishes with N, and the shared, correlated piece is what you're left holding.",
      strategies: ["Consider extremes", "Find the limiting behaviour"],
      keyPoints: [
        "N uncorrelated equal bets: portfolio volatility = sigma / sqrt(N)",
        "With correlation rho, variance tends to sigma² × (rho + (1 − rho)/N) — the floor is sigma × sqrt(rho)",
        "40% vol stocks at rho 0.3: 20 names gets you to ≈23%, 100 names only to ≈22% — the marginal stock buys almost nothing",
      ],
    },
    {
      heading: "The 21st stock vs. a genuinely different asset class",
      body:
        "If the correlation floor caps what stock-picking breadth can do, the escape route is obvious: add assets whose correlation to your equity book is genuinely low — not 0.9, but 0.3, 0.0, or negative in the states that matter. That means different **asset classes**: high-grade bonds, TIPS, gold, international equities priced off different economies, and real assets.\n\nRun the numbers and the asymmetry is stark. Adding the 50th domestic stock moves portfolio volatility by basis points. Adding a meaningful allocation to an asset with near-zero correlation to equities can cut portfolio volatility by several percentage points — and every point of sigma you remove comes back doubled through the two channels from the first section: less drag, and a larger permitted allocation via the sigma-squared denominator.\n\nThis is why sophisticated allocators spend their effort at the asset-class level rather than the security level. Within an equity market, index funds harvest essentially all the available diversification for a few basis points. Across asset classes, the correlations are structurally lower, and that is where a private investor's decisions actually move the needle. The question worth your time is not 'which 30 stocks?' but 'what mix of equities, duration, inflation protection, and real assets — and in what sizes?'\n\nOne caution to carry forward: the correlations you plug in should be the ones you expect *when it matters*, a point the final section returns to.",
      strategies: ["Spend effort where the gradient is steepest"],
      keyPoints: [
        "Within an asset class, diversification is cheap and quickly exhausted — index funds finish the job",
        "Across asset classes, correlations are structurally lower, so each addition cuts risk far more than another stock",
        "Every point of sigma removed pays twice: less volatility drag, larger optimal allocation",
      ],
    },
    {
      heading: "Concentration through the Merton lens",
      discovery: {
        problem:
          "You hold a large position in a single blue-chip stock: equity premium about 4%, volatility about 45% (typical for a single name), and your risk aversion gamma is 3. Before computing: what fraction of your wealth does the Merton formula say this position deserves?",
        idea:
          "k* = 0.04 / (3 × 0.45²) = 0.04 / (3 × 0.2025) = 0.04 / 0.6075 ≈ 6.6%. Mid-single digits. Not 30%, not 60% — about one-fifteenth of your wealth. The same formula that happily allocates large fractions to a diversified portfolio treats a single stock as barely investable.",
      },
      body:
        "Here is the uncomfortable arithmetic behind the missing billionaires. A typical single stock carries 35-50% volatility — but its *expected* return is roughly the same as the market's, because idiosyncratic risk is **uncompensated**: the market pays you for bearing risk that can't be diversified away, and pays nothing extra for risk that can.\n\nSo the single stock offers the market's premium at two to three times the market's volatility. Feed that into k* = (mu − r) / (gamma × sigma²) and the squared denominator does brutal work: at a 4% premium, 45% volatility, and gamma of 3, the optimal holding is about **6.6% of wealth**. Compare the diversified market at, say, 16% volatility: 0.04 / (3 × 0.0256) ≈ 52%. Same expected return; an eight-fold difference in permitted size.\n\nThe 1900-era families that vanished were routinely 60-80% concentrated in the family business or a single railroad, bank, or mill. Through the Merton lens they weren't slightly overexposed — they were holding ten times the defensible size, decade after decade, until one bad draw arrived. If a legacy position, founder's stock, or concentrated vested equity is a large share of your net worth, the formula's message is not 'trim it someday.' It is that the position is an order of magnitude too large *today*, and every year it stays on is another spin of the same wheel.",
      strategies: ["Run the formula before trusting the story"],
      keyPoints: [
        "Idiosyncratic risk is uncompensated: a single stock has market-like expected return at 2-3x market volatility",
        "At 4% premium, 45% vol, gamma 3: k* ≈ 6.6% — a single stock deserves mid-single-digit percent of wealth",
        "The destroyed 1900 fortunes held 60-80% concentrations — roughly ten times the size the math defends",
      ],
    },
    {
      heading: "Rebalancing, and the caveat that keeps you honest",
      body:
        "A diversified policy portfolio decays unless maintained: winners swell past their weights and the portfolio drifts back toward concentration. **Rebalancing bands** fix this mechanically — set policy weights, tolerate drift within, say, ±5 percentage points, and trade back to policy when a band is breached.\n\nThree things happen, in order of importance. First, **sizes stay at policy** — the entire point of this module is that size is the decision that matters, and rebalancing is how sizing decisions stay made. Second, with volatile, low-correlation assets you harvest a modest *rebalancing bonus*: bands mechanically sell what rose and buy what fell, capturing some mean-reversion. Third — and psychologically decisive — the rule **pre-commits you**. In March 2009 the band said buy equities; no committee meeting, no forecast, no courage required. The rule decided while you were calm.\n\nNow the caveat: **correlations rise in crises**. In 2008, US equities, international equities, credit, commodities, and real estate — diversifiers on paper — fell together; essentially only treasuries rallied. A portfolio sized on calm-period correlations discovers, at the worst moment, that its true volatility floor is higher than modelled. Two defences: *size using stressed correlations*, not the trailing-decade estimate, and hold some **true diversifiers** — TIPS, cash, gold, long treasuries — whose crisis behaviour differs *structurally* (different legal claims, different macro drivers), not just statistically. A correlation measured at 0.1 in calm markets is a hope; a treasury's contractual coupon is a fact.",
      whyItWorks:
        "Bands beat calendar rebalancing because they respond to what actually moved: small drifts are left alone (saving taxes and costs), large drifts are corrected promptly. The rebalancing bonus is volatility drag in reverse — by trimming the asset that rose and topping up the one that fell, the portfolio's compound return edges above the weighted average of its parts, and the edge grows with the assets' volatility and with how uncorrelated they are.",
      strategies: ["Pre-commit to mechanical rules", "Stress-test the inputs"],
      keyPoints: [
        "Rebalancing's first job is keeping sizes at policy — the bonus and the discipline are second and third",
        "Bands (e.g. ±5 percentage points) sell what rose and buy what fell, with no forecast required",
        "Correlations rise in crises: size with stressed correlations and hold structurally different diversifiers (TIPS, cash, gold)",
      ],
    },
  ],
  quiz: [
    {
      id: "divers-q1",
      question:
        "Why is diversification called the only 'free lunch' in investing?",
      options: [
        "It guarantees a positive return in every year",
        "It reduces portfolio risk without reducing expected return",
        "It eliminates the need to rebalance",
        "It lets you avoid taxes on realized gains",
      ],
      answerIndex: 1,
      explanation:
        "Every other risk-reduction tool — cash, puts, de-levering — gives up expected return in exchange. Combining imperfectly correlated assets keeps expected return at the average of the parts while volatility comes in below the average of the parts. Risk falls; nothing was paid.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "divers-q2",
      question:
        "As you keep adding stocks from the same market to an equal-weighted portfolio, what ultimately limits how low portfolio volatility can go?",
      options: [
        "The number of stocks available in the index",
        "The volatility of the least volatile single stock",
        "The average correlation between the stocks",
        "Trading costs from holding many positions",
      ],
      answerIndex: 2,
      explanation:
        "Portfolio variance tends to sigma² × (rho + (1 − rho)/N), and the (1 − rho)/N term vanishes as N grows. What remains is the floor sigma × sqrt(rho), set entirely by the average pairwise correlation. More names cannot get you below it — only lower correlation can.",
      difficulty: "warmup",
      guideRef: 1,
    },
    {
      id: "divers-q3",
      question:
        "You combine 25 equal-sized, genuinely uncorrelated return streams, each with 30% volatility. What is the portfolio's volatility?",
      options: ["About 1.2%", "About 6%", "About 15%", "About 30%"],
      answerIndex: 1,
      explanation:
        "With N uncorrelated equal bets, portfolio volatility is sigma / sqrt(N) = 30% / sqrt(25) = 30% / 5 = 6%. This is the engine of multi-strategy funds and insurers: many independent bets aggregate into something far more stable than any single one.",
      difficulty: "core",
      hints: [
        "For uncorrelated equal-sized bets there is a one-line formula for portfolio volatility in terms of sigma and N.",
        "Portfolio volatility = sigma / sqrt(N). What is sqrt(25)?",
      ],
      strategy: "Look at variance, not volatility",
      guideRef: 1,
    },
    {
      id: "divers-q4",
      question:
        "Diversification halves your risky portfolio's volatility while leaving its expected excess return unchanged. According to the Merton share k* = (mu − r) / (gamma × sigma²), what happens to your optimal allocation to that portfolio?",
      options: [
        "It stays the same — expected return didn't change",
        "It doubles",
        "It quadruples",
        "It rises by half",
      ],
      answerIndex: 2,
      explanation:
        "Sigma enters the denominator squared, so halving sigma cuts sigma² to one quarter, and k* multiplies by four. This is diversification's second payoff channel: cutting risk doesn't just smooth the ride, it rationally licenses a much larger position in the risky portfolio.",
      difficulty: "core",
      hints: [
        "Look at where sigma appears in the formula — and note the exponent.",
        "If sigma becomes sigma/2, what does sigma² become?",
      ],
      strategy: "Look at variance, not volatility",
      guideRef: 0,
    },
    {
      id: "divers-q5",
      question:
        "Stocks in a market each have about 40% volatility with average pairwise correlation 0.25. No matter how many of them you hold, roughly what is the lowest portfolio volatility you can reach?",
      options: ["About 10%", "About 20%", "About 25%", "About 40%"],
      answerIndex: 1,
      explanation:
        "The diversifiable term (1 − rho)/N vanishes as N grows, leaving variance of sigma² × rho. The floor is sigma × sqrt(rho) = 40% × sqrt(0.25) = 40% × 0.5 = 20%. Half the single-stock risk survives all the diversification the market can offer — which is why allocators go hunting for other asset classes.",
      difficulty: "core",
      hints: [
        "As N → infinity, which term of sigma² × (rho + (1 − rho)/N) survives?",
        "The floor on volatility is sigma × sqrt(rho). What is sqrt(0.25)?",
      ],
      strategy: "Find the limiting behaviour",
      guideRef: 1,
    },
    {
      id: "divers-q6",
      question:
        "Portfolios A and B both have an 8% average (arithmetic) return. A has 20% volatility, B has 10%. Using growth ≈ mu − sigma²/2, roughly how do their long-run compound growth rates compare?",
      options: [
        "Both compound at about 8% — average return is what compounds",
        "A ≈ 6%, B ≈ 7.5% — B compounds about 1.5 points faster",
        "A ≈ 7.5%, B ≈ 6% — extra volatility adds to growth",
        "A ≈ 4%, B ≈ 7% — B compounds about 3 points faster",
      ],
      answerIndex: 1,
      explanation:
        "Drag equals sigma²/2: for A that is 0.20²/2 = 2 percentage points, for B 0.10²/2 = 0.5 points. So A compounds at about 6% and B at about 7.5%, despite identical average returns. Because drag scales with variance, halving sigma cut the drag by three-quarters — the quiet first channel of the free lunch.",
      difficulty: "core",
      hints: [
        "Compute each portfolio's drag term sigma²/2 separately, keeping units straight (0.20² = 0.04).",
        "A's drag is 0.04/2 = 2 percentage points. Now do the same for B with sigma = 0.10, and subtract each drag from 8%.",
      ],
      strategy: "Look at variance, not volatility",
      guideRef: 0,
    },
    {
      id: "divers-q7",
      question:
        "A founder holds stock in her own company: expected excess return 4.5% (about the same as the market — idiosyncratic risk is uncompensated), volatility 50%, and her gamma is 3. What does k* = (mu − r) / (gamma × sigma²) say the position should be as a fraction of her wealth?",
      options: ["About 30%", "About 18%", "About 6%", "About 1%"],
      answerIndex: 2,
      explanation:
        "k* = 0.045 / (3 × 0.50²) = 0.045 / 0.75 = 6%. Because a single stock carries market-like expected return at roughly triple the market's volatility, the squared denominator crushes the defensible size to mid-single digits. Founders and heirs holding 60-80% concentrations are running roughly ten times the size the formula supports — the signature error of the vanished 1900 fortunes.",
      difficulty: "challenge",
      hints: [
        "Start with the denominator: square the volatility first, then multiply by gamma.",
        "0.50² = 0.25, and 3 × 0.25 = 0.75.",
        "Now divide the 4.5% excess return by 0.75.",
      ],
      strategy: "Run the formula before trusting the story",
      guideRef: 3,
    },
    {
      id: "divers-q8",
      question:
        "You size a portfolio of 5 equal-weighted asset classes, each with 20% volatility, using the calm-market average correlation of 0.2. In a crisis, average correlation jumps to 0.8. Using variance ≈ sigma² × (rho + (1 − rho)/N), roughly what happens to portfolio volatility?",
      options: [
        "It rises from about 9% to about 13%",
        "It rises from about 12% to about 18%",
        "It rises from about 12% to about 20% — the diversification vanishes entirely",
        "It stays near 12% — correlation doesn't affect a 5-asset portfolio much",
      ],
      answerIndex: 1,
      explanation:
        "Calm: 20% × sqrt(0.2 + 0.8/5) = 20% × sqrt(0.36) = 12%. Crisis: 20% × sqrt(0.8 + 0.2/5) = 20% × sqrt(0.84) ≈ 18.3%. Measured risk jumps by half exactly when markets are falling — which is why you size positions using stressed correlations and keep some structurally different diversifiers (treasuries, TIPS, cash, gold) rather than relying on calm-period statistics.",
      difficulty: "challenge",
      hints: [
        "Compute the calm case first: inside the square root, rho + (1 − rho)/N = 0.2 + 0.8/5.",
        "That gives sqrt(0.36) = 0.6, so calm volatility is 20% × 0.6 = 12%. Now rebuild the bracket with rho = 0.8.",
        "The crisis bracket is 0.8 + 0.2/5 = 0.84. Take its square root and multiply by 20%.",
      ],
      strategy: "Stress-test the inputs",
      guideRef: 4,
    },
  ],
  interactive: "diversification-lab",
  interactiveTitle: "The Diversification Lab",
  interactiveBlurb:
    "Add assets, turn the correlation dial, and watch portfolio risk — and therefore how much you're allowed to hold — transform.",
};
