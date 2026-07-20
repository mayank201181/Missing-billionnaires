import type { Topic } from "../types";

export const riskAndReturn: Topic = {
  id: "risk-and-return",
  title: "Estimating Risk & Expected Return",
  icon: "📈",
  part: "Part II — Risk, Return & Utility",
  order: 4,
  tagline: "The two inputs every sizing decision needs — and why one is far harder to pin down than the other",
  intro:
    "The Merton framework tells you how much risk to take — but only after you feed it two numbers: the expected *excess* return of the risky asset (mu) and its volatility (sigma). This chapter is about where those numbers come from. History offers one answer: US equities have delivered roughly 6.5-7% real per year, with a premium of about 4-6% over safe assets. Current valuations offer another: the cyclically-adjusted earnings yield, 1/CAPE. The deepest lesson, though, is an asymmetry. Volatility can be estimated well from months of data, while the mean return stays stubbornly foggy even after a *century* — and a rational investor plans around that fog rather than pretending it away.",
  guide: [
    {
      heading: "Two numbers to size any bet",
      body:
        "Every application of the book's framework — the Merton share, spending rules, insurance decisions — runs on the same two inputs. The first is **mu**, the expected *excess* return: how much the risky asset is expected to beat a safe asset, per year. The second is **sigma**, the volatility: the typical size of annual ups and downs, measured as a standard deviation. The optimal fraction of wealth in the risky asset is `mu / (gamma * sigma^2)`, where gamma is your personal risk aversion.\n\nNotice what is *not* on the list: which stocks to pick, when to get in or out, what the Fed will do next. Sizing needs only a forecast of the reward and a forecast of the risk.\n\nA useful yardstick combines the two: the **Sharpe ratio**, `mu / sigma`, the expected excess return earned per unit of risk taken. Over the long run, US equities have delivered a Sharpe ratio of roughly **0.3** — for example, a 6% premium divided by 20% volatility. That number is worth memorizing: any strategy claiming a sustained Sharpe far above it deserves deep suspicion, and any portfolio decision can be sanity-checked against it.\n\nThe rest of this topic asks the practical question: how do you actually *estimate* mu and sigma, and how much should you trust the estimates?",
      strategies: ["Identify the inputs before the formula"],
      keyPoints: [
        "Sizing decisions need exactly two inputs: expected excess return (mu) and volatility (sigma)",
        "Sharpe ratio = mu / sigma is the reward-per-unit-risk yardstick; long-run US equities score about 0.3",
        "Asset selection and market timing are not inputs to the sizing formula",
      ],
    },
    {
      heading: "What a century of markets says",
      body:
        "The longest, cleanest dataset we have is US market history, and its headline numbers anchor every estimate in the book.\n\n- **Equities**: roughly **6.5-7% real** (after inflation) per year, with volatility around **20%**\n- **T-bills**: roughly **0.5-1% real** per year — barely ahead of inflation\n- **Equity risk premium**: the gap between them, historically about **4-6% per year** over safe assets\n\nThat premium is the engine of the whole story. Compounded over decades, an extra 5% per year is the difference between an ordinary retirement and a dynasty — it is why the missing billionaires *should* exist.\n\nBut a historical average comes with two warnings. First, the US was arguably the best-performing major market of the 20th century; investors in 1900 could not have known that in advance, so the realized US premium likely *overstates* what was truly expected. Second — and this is the next section's subject — even 120 years of data pins down the average surprisingly loosely.\n\nSo treat history as one witness, not a verdict. The book's best practice is to **blend** the historical premium with a forward-looking, valuation-based estimate, and to hold the result humbly: as a central guess with a wide band of uncertainty around it, not a fact.",
      keyPoints: [
        "Long-run US history: equities ~6.5-7% real with sigma ~20%; T-bills ~0.5-1% real",
        "The historical equity risk premium is about 4-6% per year over safe assets",
        "Blend historical and valuation-based estimates, and treat the result as uncertain",
      ],
    },
    {
      heading: "The great asymmetry: the mean is hard, the volatility is easy",
      discovery: {
        problem:
          "You have 50 years of annual stock returns. The average excess return in your sample is 5%, and volatility is 20%. Before reading on: how precisely does this pin down the *true* expected return? Put a plus-or-minus band on it. And would collecting daily instead of annual data tighten the band?",
        idea:
          "The standard error of an estimated mean is `sigma / sqrt(T)`. With sigma = 20% and T = 50 years, that is 20% / 7.1 ≈ **2.8% per year** — an uncertainty about as large as the premium you are trying to measure! The true premium could plausibly be 2% or 8%. And no, daily data does not help: the mean improves only with *elapsed time*, not sampling frequency. Volatility, by contrast, *can* be estimated from high-frequency data — months of daily returns give a solid sigma estimate.",
      },
      body:
        "This is the chapter's most important technical idea, and it explains the entire architecture of the book's advice.\n\n**Volatility is knowable.** Because you can chop a year into hundreds of daily observations, each one an independent-ish sample of the size of moves, a few months of data produce a usable estimate of sigma. Risk models work.\n\n**The mean is not.** The standard error of an estimated average return is `sigma / sqrt(T)`, where T is the number of *years* observed. With equity-like volatility of 20%, even 50 years gives a standard error near 2.8% — the same order of magnitude as the equity premium itself. To shrink the error to 1%, you would need `(20/1)^2 = 400` years of stationary data, which does not exist and would describe a different world if it did.\n\nThe practical consequences: never treat a point estimate of mu as certain; prefer estimates that combine independent sources (history plus current valuations); and expect the Merton share itself to be an estimate with error bars, which argues for erring modestly conservative in sizing.",
      whyItWorks:
        "Why doesn't frequent sampling help the mean? Over any period, the average return is pinned down by just two numbers: where the index started and where it ended. All the intermediate daily prices cancel out of the average — sampling them adds no new information about the trend. Formally, chopping T years into N pieces divides both the per-period mean and per-period variance, and recombining them leaves the standard error at sigma/sqrt(T) regardless of N. Variance is different: every daily wiggle is a fresh, informative draw of the *size* of moves, so the sigma estimate improves with the number of observations, which you can multiply at will by sampling faster.",
      strategies: ["Quantify your uncertainty", "Ask what extra data would actually change"],
      keyPoints: [
        "Standard error of a mean return = sigma / sqrt(T); with sigma 20%, 50 years still leaves ~2.8% per year of uncertainty",
        "Mean estimates improve only with total elapsed time; volatility estimates improve with sampling frequency",
        "Because mu is uncertain, treat the Merton share as an estimate too — and size with humility",
      ],
    },
    {
      heading: "A forward-looking estimate: the earnings yield",
      discovery: {
        problem:
          "Forget history. Suppose you could buy the *entire* US stock market today at a price equal to 30 times its cyclically-adjusted annual earnings (a CAPE of 30). As the outright owner, all those earnings accrue to you, and earnings tend to grow with inflation over time. What real annual return should you pencil in? What if the price were only 20 times earnings?",
        idea:
          "You are paying 30 dollars for each dollar of annual earnings, so your earnings yield is 1/30 ≈ **3.3% real per year**. At a CAPE of 20, the yield is 1/20 = **5% real**. That is the book's favoured forward-looking estimate of expected real equity returns: the **cyclically-adjusted earnings yield, 1/CAPE**. Cheaper markets — lower CAPE, higher yield — offer higher expected returns.",
      },
      body:
        "The **CAPE** (cyclically-adjusted price/earnings ratio) divides today's price by the average of the past ten years of inflation-adjusted earnings, smoothing out booms and recessions in the earnings denominator. Its reciprocal, `1/CAPE`, is the cyclically-adjusted earnings yield — an estimate of the expected **real** return on equities that uses today's price rather than yesterday's performance.\n\nThe logic is ownership logic: equities are claims on real businesses, and the return to owning a business is ultimately the earnings it generates per dollar you paid. Because earnings are real assets' output, they broadly keep pace with inflation, which is why the yield maps to a *real* return with no further adjustment.\n\nTo turn this into the mu the Merton formula needs, subtract the real return on safe assets. With CAPE at 30 (a 3.3% real return) and real bill yields near 0.5%, the implied premium is about 2.8% — well below the 4-6% historical average, and a signal to hold less equity than the historical numbers alone would suggest.\n\nNeither witness deserves full trust: history is noisy, and valuation models are crude. The book's practice is to **blend** the two into a central estimate, then remember the error bars from the previous section.",
      whyItWorks:
        "Think of buying a rental house for 25 times its annual rent (net of costs). Your yield is 1/25 = 4% per year, and since rents drift up with inflation, that 4% is roughly a real return. A stock index is the same trade at scale: price paid per dollar of smoothed earnings determines your yield. Using ten-year average real earnings instead of one hot or depressed year keeps a single point in the business cycle from distorting the denominator.",
      strategies: ["Take the reciprocal", "Reason from ownership"],
      keyPoints: [
        "1/CAPE estimates the expected real return on equities: CAPE 30 implies ~3.3% real, CAPE 20 implies 5%",
        "Subtract the real safe rate from 1/CAPE to get a forward-looking equity risk premium",
        "Blend valuation-based and historical estimates rather than trusting either alone",
      ],
    },
    {
      heading: "Moving targets, and risk beyond sigma",
      body:
        "Expected returns are not a constant of nature — they **vary over time**. After crashes, prices are low relative to earnings, CAPE falls, and expected returns are *higher*; after long booms, the opposite. Run that through the Merton share and a striking conclusion follows: the rational allocation to equities should *rise* when markets are cheap and *fall* when they are expensive. This is the reverse of what most investors do, since fear peaks exactly when expected returns do.\n\nA second caution: sigma is not the whole of risk.\n\n- **Fat tails and crashes** — extreme moves happen more often than a bell curve predicts\n- **Inflation** — over long horizons, 'safe' bills and bonds carry real risk, since their payouts are fixed in dollars while prices are not; the safe asset for a 30-year goal is not the safe asset for next month\n- **Regime change** — the future need not be drawn from the past's distribution\n\nThe book's stance is pragmatic: sigma remains the right *first-order* summary of risk, and the framework built on it captures most of what matters. Finally, the recurring errors to avoid: extrapolating recent returns forward (recency is not expectancy), treating a point estimate of mu as certain, and forgetting that the 'riskless' asset quietly bears inflation risk at long horizons.",
      strategies: ["Invert the crowd's instinct", "Stress-test the assumptions"],
      keyPoints: [
        "Expected returns are higher after crashes and lower after booms — so allocations should vary too",
        "Sigma is the right first-order risk measure, but fat tails, crashes, and inflation lurk beyond it",
        "Classic errors: extrapolating recent returns, false certainty in mu, calling bills 'riskless' over decades",
      ],
    },
  ],
  quiz: [
    {
      id: "riskret-q1",
      question: "The Sharpe ratio, the book's yardstick for any risky investment, is best described as:",
      options: [
        "Total return divided by the risk-free rate",
        "Expected excess return divided by volatility — the reward earned per unit of risk",
        "Volatility divided by expected return",
        "The probability that a portfolio beats cash over one year",
      ],
      answerIndex: 1,
      explanation:
        "Sharpe ratio = mu / sigma: expected return *in excess of the safe asset*, per unit of standard deviation. It lets you compare investments of different riskiness on one scale. Long-run US equities score about 0.3 — for example, a 6% premium over 20% volatility.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "riskret-q2",
      question: "Of the two inputs to the Merton sizing formula, which can be estimated far more precisely, and why?",
      options: [
        "Expected excess return, because return data goes back over a century",
        "Neither — both are essentially unknowable",
        "Volatility, because you can sample price moves at high frequency and each observation adds information",
        "Both equally, since they come from the same price series",
      ],
      answerIndex: 2,
      explanation:
        "Volatility can be pinned down from just months of daily data, because every observed move is a fresh sample of the *size* of fluctuations. The mean improves only with total elapsed time, so even a century of data leaves the expected return uncertain by a couple of percent per year.",
      difficulty: "warmup",
      guideRef: 2,
    },
    {
      id: "riskret-q3",
      question: "The stock market's CAPE ratio stands at 25. Using the book's favoured forward-looking method, what is the implied expected real return on equities?",
      options: ["2.5% per year", "4% per year", "5% per year", "6.5% per year"],
      answerIndex: 1,
      explanation:
        "The cyclically-adjusted earnings yield is 1/CAPE = 1/25 = 4% real per year. You are paying 25 dollars per dollar of smoothed annual earnings, so each dollar invested earns you 4 cents of real earning power. Cross-check with the anchors: CAPE 30 implies ~3.3%, CAPE 20 implies 5%, so CAPE 25 sits between them.",
      difficulty: "core",
      hints: [
        "The book's forward-looking estimate is the cyclically-adjusted earnings yield. How does it relate to CAPE?",
        "Take the reciprocal: earnings yield = 1/CAPE. What is 1/25?",
        "1/25 = 0.04, i.e. 4% — and it is a *real* return, since earnings tend to keep up with inflation.",
      ],
      strategy: "Take the reciprocal",
      guideRef: 3,
    },
    {
      id: "riskret-q4",
      question: "Stock returns have volatility of 20% per year. With 100 years of data, roughly how precisely is the true average annual return pinned down (one standard error)?",
      options: ["About ±2% per year", "About ±0.2% per year", "About ±4% per year", "About ±20% per year"],
      answerIndex: 0,
      explanation:
        "The standard error of a mean is sigma / sqrt(T) = 20% / sqrt(100) = 20% / 10 = 2% per year. So even a full century of data leaves the expected return uncertain by roughly the same order of magnitude as the equity premium itself — the central estimation problem of the chapter.",
      difficulty: "core",
      hints: [
        "There is a standard formula for the precision of an estimated mean from T independent annual observations.",
        "Standard error = sigma / sqrt(T). Plug in sigma = 20% and T = 100.",
        "sqrt(100) = 10, so the standard error is 20% / 10 = 2%.",
      ],
      strategy: "Quantify your uncertainty",
      guideRef: 2,
    },
    {
      id: "riskret-q5",
      question: "Why does switching from annual to daily data — hundreds of times more observations — fail to improve your estimate of the market's *average* return?",
      options: [
        "Daily returns are too noisy to be recorded accurately",
        "It does improve it — the book recommends daily data for estimating the mean",
        "The average return over a period is pinned down by the start and end values alone, so intermediate observations add nothing; only more elapsed calendar time helps",
        "Markets are closed on weekends, which biases daily samples",
      ],
      answerIndex: 2,
      explanation:
        "All the intermediate prices cancel out of the average: the mean return depends only on where the index began and where it ended. Chopping the same span into finer pieces adds no information about the trend, so the standard error stays sigma/sqrt(T) with T in years. Volatility is the opposite case — each daily move is a fresh draw of the *size* of fluctuations, so more observations genuinely help.",
      difficulty: "core",
      hints: [
        "Write the average return over 10 years in terms of the price path. Which prices actually survive in the formula?",
        "The intermediate prices telescope away — only the first and last remain. What does that imply about extra samples in between?",
      ],
      strategy: "Ask what extra data would actually change",
      guideRef: 2,
    },
    {
      id: "riskret-q6",
      question: "Expected returns vary over time — higher after crashes, lower after long booms. Combined with the Merton share, what does this imply for a rational investor's equity allocation?",
      options: [
        "Keep the allocation constant, since timing the market is impossible",
        "Raise the allocation when markets are cheap after crashes, and trim it after booms when expected returns are low",
        "Sell equities after crashes, since crashes prove risk is elevated",
        "Increase the allocation after strong recent returns, since momentum raises mu",
      ],
      answerIndex: 1,
      explanation:
        "The Merton share is mu / (gamma * sigma^2): when mu rises, the optimal allocation rises. Crashes push valuations down and expected returns (1/CAPE) up, so the framework prescribes owning *more* equities precisely when fear is greatest — and less after booms, when high prices have pushed expected returns down. This is disciplined valuation response, not gut-feel market timing.",
      difficulty: "core",
      hints: [
        "Recall the sizing formula: the optimal risky share is proportional to mu. What happens to mu when prices crash?",
        "A crash lowers CAPE, so 1/CAPE — the expected real return — rises. Feed a bigger mu into the Merton share.",
      ],
      strategy: "Invert the crowd's instinct",
      guideRef: 4,
    },
    {
      id: "riskret-q7",
      question: "Stocks offer a 5% expected excess return with 20% volatility (Sharpe 0.25). You invest 60% of wealth in stocks and 40% in T-bills. What are your portfolio's expected excess return, volatility, and Sharpe ratio?",
      options: [
        "Excess return 3%, volatility 12%, Sharpe 0.25 — blending with cash scales risk and reward together, leaving the Sharpe unchanged",
        "Excess return 3%, volatility 8%, Sharpe 0.38 — diversification into bills improves the Sharpe",
        "Excess return 5%, volatility 12%, Sharpe 0.42 — the premium is unaffected by the bill holding",
        "Excess return 3%, volatility 20%, Sharpe 0.15 — volatility is a property of stocks, not of the mix",
      ],
      answerIndex: 0,
      explanation:
        "Bills add no excess return and no volatility, so both portfolio quantities are just 0.6 times the stock figures: excess return 0.6 × 5% = 3%, volatility 0.6 × 20% = 12%, giving Sharpe 3/12 = 0.25 — identical to 100% stocks. Mixing with the safe asset moves you along a straight line of constant Sharpe: the *dial* (how much risk) changes, but the *quality* of each unit of risk does not. That is exactly why sizing and reward-per-risk are separate decisions.",
      difficulty: "challenge",
      hints: [
        "T-bills contribute zero excess return and zero volatility. What fraction of the stock exposure does the portfolio carry?",
        "Both the excess return and the volatility scale by the 60% weight: 0.6 × 5% and 0.6 × 20%.",
        "Now divide: 3% / 12%. Compare with the original 5% / 20%.",
      ],
      strategy: "Track what scales and what cancels",
      guideRef: 0,
    },
    {
      id: "riskret-q8",
      question: "With equity volatility at 20% per year, roughly how many years of well-behaved data would you need to estimate the expected return to within a standard error of just 1% per year?",
      options: [
        "About 40 years",
        "About 100 years",
        "About 400 years",
        "About 4 years, provided you use daily data",
      ],
      answerIndex: 2,
      explanation:
        "Set sigma / sqrt(T) = 1%: sqrt(T) = 20% / 1% = 20, so T = 20² = 400 years. No such stationary dataset exists — and an economy observed over 400 years would have changed beyond recognition anyway. The daily-data option is the classic trap: sampling frequency helps sigma, never mu. This is why the book insists the premium must be treated as genuinely uncertain.",
      difficulty: "challenge",
      hints: [
        "Start from the standard error formula sigma / sqrt(T) and set it equal to the 1% target.",
        "Solve for sqrt(T): sqrt(T) = 20 / 1 = 20. Now what is T?",
        "T = 20² = 400 years. And beware the daily-data option — recall why frequency doesn't help the mean.",
      ],
      strategy: "Work backwards from the target",
      guideRef: 2,
    },
  ],
  interactive: "risk-return-mixer",
  interactiveTitle: "The Portfolio Mixer",
  interactiveBlurb:
    "Blend stocks and safe assets, set the equity risk premium and volatility, and watch expected return, risk, and the Sharpe ratio move.",
};
