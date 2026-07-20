import type { Topic } from "../types";

export const concentratedWealth: Topic = {
  id: "concentrated-wealth",
  title: "Concentrated Wealth & the Founder's Problem",
  icon: "🏢",
  part: "The Allocator's Track — Staying Rich",
  order: 106,
  track: "wealth",
  tagline:
    "The position that made you rich is now the biggest threat to your staying rich — and there's arithmetic for exactly how big",
  intro:
    "If you built your wealth through a business, you almost certainly hold a lot of it in one asset: founder stock, the company itself, maybe one building. That is not an accident — large fortunes are nearly always *made* that way. But the evidence from every generation of wealthy families says fortunes are *kept* a completely different way, and the pivot between the two is the hardest move in finance precisely because it asks you to shrink the thing that worked. This module puts a number on what a concentrated position actually costs you per year in risk-adjusted terms, examines the real reasons to hold (control, taxes, lock-ups) inside the calculation rather than as excuses to skip it, and lays out the practical de-risking menu — including the one popular move that quietly makes things worse.",
  guide: [
    {
      heading: "The founder's paradox",
      discovery: {
        problem:
          "Think about how the largest fortunes you know were created: one company, one stock, one piece of real estate, held with total conviction through everything. Now recall the 4,000 American millionaires of 1900, nearly all of whom built their wealth exactly that way — and nearly all of whose family fortunes are gone. What changed between the making and the losing?",
        idea:
          "Nothing changed — and that's the problem. The behaviour that builds a fortune (extreme concentration, total commitment, ignoring the doubters) is the same behaviour that destroys one. Wealth is *made* through concentration and *kept* through diversification. The skills are opposites, and the families that vanished never made the switch.",
      },
      body:
        "Almost no one gets rich through diversification. A founder pours everything into one business for a decade or two; a real-estate fortune starts with one leveraged building; even Thorp's blackjack winnings began with aggressive bets on a genuine edge. Concentration plus a favourable draw is the origin story of nearly every large fortune.\n\nBut the same concentration that created the wealth becomes, once the wealth exists, an enormous *uncompensated* risk. The game has changed: you are no longer trying to turn a modest stake into a fortune — you are trying to make an existing fortune survive decades of taxes, spending, and markets. Those are different games with different optimal strategies.\n\nThe hardest pivot in finance is recognizing when to switch. It is hard precisely because the evidence *feels* one-sided: the concentrated bet is the only strategy you have personally seen work. The 1900 families felt the same way. Their railroads, mills, and banks had made them rich, and staying concentrated in them felt like loyalty and confidence. It was neither — it was a sizing error, repeated for a generation, and it explains a large share of the missing billionaires.",
      strategies: ["Consider extremes", "Ask what game you are playing now"],
      keyPoints: [
        "Fortunes are almost always made through concentration and kept through diversification — opposite skills",
        "Once wealth exists, the objective changes from creating a fortune to making one survive",
        "The 1900 families never made the pivot; that failure is a major source of the missing billionaires",
      ],
    },
    {
      heading: "Only the future distribution matters",
      discovery: {
        problem:
          "Your company's stock has compounded at 30% per year for fifteen years — it's why you're wealthy. Sitting here today, with no inside information about the next decade, what is your best estimate of its *future* expected return: closer to 30%, or closer to the 6-7% of the broad market?",
        idea:
          "Closer to 6-7%. The 30% was *realized* by a mix of skill and survivorship luck — you observe it precisely because your company was one of the winners. For every company with that track record, many similar ones with similar management quality went sideways or died. Unless you hold genuine private information the market lacks, the forward-looking expected return is roughly market-like. What is *not* market-like is the volatility.",
      },
      body:
        "Every sizing decision is about the future distribution of returns, and the past track record of your own company is close to useless for estimating it. The record you observe is filtered by survivorship: the founders reading this are the ones whose single bet paid off.\n\nA reasonable forward-looking model for a single stock — even a very good company — is an expected return in the same neighbourhood as the market's, roughly 6-7% per year, with volatility of **35-50% or more**, versus roughly 15-18% for a diversified equity portfolio. You are holding two to three times the risk for approximately the same expected reward.\n\nThat extra risk is *idiosyncratic* — specific to one firm — and markets do not pay you for bearing it, because any investor can diversify it away for free. Compensated risk is market risk; single-name risk beyond the market is volatility you carry at your own expense. The concentrated position is not a bold bet with a fat expected payoff. It is, prospectively, a market-like return strapped to a triple dose of unpaid risk.",
      whyItWorks:
        "Prices are set by diversified investors who can shed single-name risk at no cost, so equilibrium expected returns compensate only the risk that *cannot* be diversified away. A single stock carries the market's expected return plus noise. Meanwhile, conditioning on a spectacular past return selects for luck as well as skill — the companies with equal skill and worse luck aren't in your sample — so the realized 30% overstates forward skill badly.",
      strategies: ["Think in populations, not anecdotes"],
      keyPoints: [
        "Past returns were realized through skill *and* survivorship luck; only the future distribution matters for sizing",
        "Absent genuine private information, a single stock's expected return is roughly market-like",
        "Its 35-50%+ volatility is mostly idiosyncratic — risk the market does not pay anyone to hold",
      ],
    },
    {
      heading: "The price tag: certainty-equivalent arithmetic",
      body:
        "Expected utility turns \"this feels risky\" into a number. For an investor with risk-aversion gamma holding fraction w of wealth in an asset with volatility sigma, the annual utility cost of the risk is:\n\n`cost per year ≈ 0.5 × gamma × w² × sigma²`\n\nRun the founder's numbers. Suppose 80% of your wealth sits in a 45%-volatility stock and your gamma is 3 (a fairly typical risk aversion):\n\n- cost = 0.5 × 3 × 0.8² × 0.45² = 0.5 × 3 × 0.64 × 0.2025 ≈ **19% per year**\n\nAgainst an expected return of maybe 6-7%, the position's certainty-equivalent return is deeply *negative* — roughly minus 12-13% a year. In risk-adjusted terms you are paying double-digits annually for the privilege of holding it. And that is before counting the possibility that a single bad event — fraud, disruption, litigation, one product cycle — ends the compounding permanently.\n\nNow shrink the position to 20% of wealth: cost = 0.5 × 3 × 0.04 × 0.2025 ≈ **1.2% per year**. Because cost scales with w *squared*, cutting the position by three-quarters cuts the cost by about 94%. That is the basis of the standard guideline: single-asset positions beyond **10-20% of wealth** need extraordinary justification.",
      whyItWorks:
        "For a power-utility investor, expected utility of a risky return expands to approximately the expected return minus 0.5 × gamma × variance of the *wealth* return. Holding fraction w of an asset with volatility sigma makes your wealth volatility w × sigma, so the penalty is 0.5 × gamma × (w × sigma)² = 0.5 × gamma × w² × sigma². The w² term is why concentration is so expensive at the top and so cheap once trimmed: doubling the position quadruples the cost.",
      strategies: ["Compute, don't guess"],
      keyPoints: [
        "Annual risk cost ≈ 0.5 × gamma × w² × sigma² — a computable price tag, not a vibe",
        "80% of wealth in a 45%-vol stock at gamma 3 costs ~19% per year, swamping a ~6-7% expected return",
        "Cost scales with w squared: at 20% of wealth the same stock costs only ~1.2% per year",
        "Guideline: single-asset positions beyond 10-20% of wealth need extraordinary justification",
      ],
    },
    {
      heading: "Real reasons, real arithmetic: control, taxes, lock-ups",
      discovery: {
        problem:
          "Selling your appreciated stock would trigger roughly a 25% tax on the position — a painfully visible eight-figure cheque. Holding costs you 'only' an invisible risk penalty. Suppose that penalty is about 12% of the position per year in certainty-equivalent terms. Which cost is actually bigger?",
        idea:
          "Within roughly two years, the recurring cost dwarfs the one-time one. A 25% haircut taken once versus 12% forfeited every year: the annual cost overtakes the tax almost immediately and then keeps accruing forever. Deferring a one-time 20-30% tax by paying a double-digit *annual* utility cost is bad arithmetic within a few years — yet the visible cheque routinely wins the argument against the invisible drain.",
      },
      body:
        "There are genuine reasons to stay concentrated, and the expected-utility framework's demand is not that you ignore them — it is that you put them *into* the calculation instead of using them as permission to skip it.\n\n- **Control and identity.** A board seat, voting control, the ability to steer the company you built — these have real value. Price them: how much annual certainty-equivalent return is control worth to you? If the position costs 15% a year and control is worth 2%, the math still says sell down.\n- **Cash flows.** Dividends and distributions are part of the expected return, not an extra reason on top of it.\n- **Taxes.** The tax bill on sale is a real cost — but a one-time 20-30% hit, versus a recurring annual risk cost that can exceed 10%. Run the crossover; it usually arrives embarrassingly fast.\n- **Lock-ups and restrictions.** These constrain *when* you can act, which argues for planning the selldown now, not for pretending the exposure is fine.\n\nEach factor is a term in the equation. What none of them is, for a position at 60-80% of wealth, is a justification for the full position — the risk cost at that size is simply too large for any plausible value of control or tax deferral to offset.",
      strategies: ["Separate one-time from recurring costs", "Put every reason into the equation"],
      keyPoints: [
        "Control, dividends, taxes, and lock-ups belong inside the expected-utility calculation, not outside it",
        "A one-time 20-30% tax is usually far smaller than a double-digit annual risk cost — diversifying wins within a few years",
        "At 60-80% of wealth, no plausible value of control or tax deferral offsets the risk cost",
      ],
    },
    {
      heading: "The de-risking menu — and the traps that keep you concentrated",
      body:
        "The practical toolkit:\n\n- **Staged selldown, pre-committed.** Sell a fixed X% of the position per quarter regardless of price. The schedule, decided once in a calm moment, removes the timing temptation forever.\n- **Exchange funds.** Swap shares into a diversified pool with other concentrated holders; diversification now, tax deferred.\n- **Collars and protective options.** A floor under the position and a cap above it. Real protection, at the cost of premium and complexity.\n- **Charitable remainder structures.** Diversify inside the trust, take an income stream, direct the remainder to philanthropy.\n- **Caution: borrowing against the stock.** A loan does *not* reduce exposure — you still hold every share, plus debt. It converts a concentrated position into a *leveraged* concentrated position. This is how concentrated founders blow up: the stock halves, the margin call arrives, and the forced sale happens at the bottom.\n\nKnow the traps by name: the **endowment effect** (\"it's *my* company\" — you'd never buy this much at today's price, so why hold it?), **survivorship-fed overconfidence** (\"it made me rich, it will keep me rich\" — every vanished 1900 family believed exactly this), and **anchoring on the peak** (\"I'll sell when it gets back to...\" — the market does not know or care what your high-water mark was).\n\nThorp's framing settles it: even with a genuine edge, you bet a *fraction* of bankroll on each hand. Your company was one great hand. It was never supposed to be the whole game.",
      whyItWorks:
        "Pre-commitment works because it moves the decision from a thousand future emotionally-loaded moments (\"is today the right day to sell?\") to one calm, analytical moment. Each individual quarter's sale no longer requires a view on price, so anchoring and regret have nothing to grab. Borrowing fails for the mirror-image reason: it leaves w unchanged while adding leverage, so the 0.5 × gamma × w² × sigma² cost stays — and the debt adds a ruin path the unlevered position never had.",
      strategies: ["Pre-commit to remove the decision", "Name the bias"],
      keyPoints: [
        "A pre-committed staged selldown removes timing temptation; exchange funds, collars, and charitable structures each trade cost for protection or deferral",
        "Borrowing against the stock does not reduce exposure — it adds leverage, and margin calls force sales at the bottom",
        "Endowment effect, survivorship-fed overconfidence, and peak-anchoring are the three named traps",
        "Thorp: your company was one great hand, not the whole game — bet fractions, always",
      ],
    },
  ],
  quiz: [
    {
      id: "concentrate-q1",
      question:
        "What is the 'founder's paradox' at the heart of concentrated wealth?",
      options: [
        "Founders understand their companies too well to ever sell at a fair price",
        "Fortunes are almost always made through concentration but kept through diversification — opposite skills",
        "Founder stock always outperforms the market, but only until the founder sells",
        "Diversification builds wealth faster, but concentration is more tax-efficient",
      ],
      answerIndex: 1,
      explanation:
        "Nearly every large fortune is created by concentration — one business, one stock, one building — yet the historical evidence shows fortunes survive only through diversification. The behaviour that built the wealth is the behaviour that destroys it once the wealth exists, which is why the pivot is so hard: the concentrated bet is the only strategy the founder has personally seen work.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "concentrate-q2",
      question:
        "Which of these popular moves does NOT actually reduce your exposure to a concentrated stock position?",
      options: [
        "A pre-committed staged selldown schedule",
        "Contributing shares to an exchange fund",
        "Buying a collar (protective put plus covered call)",
        "Borrowing against the stock to fund your lifestyle",
      ],
      answerIndex: 3,
      explanation:
        "A loan against the stock leaves you holding every share — full exposure — and adds debt on top, converting a concentrated position into a leveraged concentrated position. In a drawdown, margin calls can force sales at the bottom, which is precisely how concentrated founders blow up. The other three genuinely cut or cap the exposure.",
      difficulty: "warmup",
      guideRef: 4,
    },
    {
      id: "concentrate-q3",
      question:
        "You hold 50% of your wealth in a single stock with 40% annual volatility, and your risk aversion is gamma = 3. Using cost ≈ 0.5 × gamma × w² × sigma², what is the approximate annual utility cost of the position's risk?",
      options: ["About 1.5% per year", "About 3% per year", "About 6% per year", "About 12% per year"],
      answerIndex: 2,
      explanation:
        "0.5 × 3 × 0.5² × 0.4² = 1.5 × 0.25 × 0.16 = 0.06, i.e. about 6% per year. Notice that this alone consumes most of a market-like 6-7% expected return — at half your wealth in one name, you are working for roughly nothing in certainty-equivalent terms.",
      difficulty: "core",
      hints: [
        "Write down the formula and identify each input: gamma = 3, w = 0.5, sigma = 0.40.",
        "Square the fraction and the volatility first: w² = 0.25 and sigma² = 0.16.",
        "Now multiply 0.5 × 3 × 0.25 × 0.16.",
      ],
      strategy: "Compute, don't guess",
      guideRef: 2,
    },
    {
      id: "concentrate-q4",
      question:
        "Selling your concentrated position would cost a one-time tax of about 25% of its value. Staying concentrated costs you about 12% of the position per year in certainty-equivalent terms versus holding a diversified portfolio. Roughly how quickly does diversifying pull ahead despite the tax?",
      options: [
        "After about 12 years",
        "Within about 2 years",
        "After about 25 years",
        "Never — a certain tax always outweighs an uncertain risk cost",
      ],
      answerIndex: 1,
      explanation:
        "A 25% one-time cost against a 12%-per-year recurring cost breaks even at roughly 25/12 ≈ 2 years, and diversifying is increasingly ahead every year after that. The tax is real, but it is a single haircut; the risk cost accrues forever. The visible cheque loses to the invisible annual drain very quickly — this is the core arithmetic behind not letting the tax tail wag the risk dog.",
      difficulty: "core",
      hints: [
        "One cost is paid once; the other is paid every single year. Put them in the same units before comparing.",
        "Ask how many years of a 12%-per-year cost it takes to accumulate to a one-time 25% cost.",
        "Divide 25 by 12.",
      ],
      strategy: "Separate one-time from recurring costs",
      guideRef: 3,
    },
    {
      id: "concentrate-q5",
      question:
        "A founder whose stock trades at $54 says: 'I'm not selling any shares until it gets back to its all-time high of $90.' Which named behavioural trap is this, most precisely?",
      options: [
        "The endowment effect",
        "Survivorship-fed overconfidence",
        "Loss aversion over realized gains",
        "Anchoring on the peak price",
      ],
      answerIndex: 3,
      explanation:
        "The tell is the specific reference price: $90 matters to the founder's psychology but is irrelevant to the forward-looking distribution — the market neither knows nor cares about anyone's high-water mark. Anchoring on the peak turns 'when to de-risk' into 'when I get made whole', which can mean never. The endowment effect ('it's MY company') and survivorship overconfidence ('it made me rich, it will keep me rich') are the other two named traps, but neither involves a reference price.",
      difficulty: "core",
      hints: [
        "Look at what is doing the work in the founder's sentence: a feeling of ownership, a belief about skill, or a specific number?",
        "Ask whether the $90 figure carries any information about the stock's future return distribution — and if not, why it still dominates the decision.",
      ],
      strategy: "Name the bias",
      guideRef: 4,
    },
    {
      id: "concentrate-q6",
      question:
        "Your company's stock returned 30% per year for fifteen years. With no genuine private information, what does the framework say you should assume about its FUTURE return distribution?",
      options: [
        "Expected return roughly market-like (6-7%), with volatility far higher than the market's",
        "Expected return near 30%, since a long track record proves persistent skill",
        "Expected return around 15% — halfway between the record and the market",
        "Expected return below the market's, since past winners always mean-revert",
      ],
      answerIndex: 0,
      explanation:
        "The realized 30% was produced by skill mixed with survivorship luck — you observe that record precisely because your company was a winner, while equally skilled companies with worse luck vanished from the sample. Absent private information, the forward expected return is roughly market-like; what stays extreme is the 35-50%+ single-name volatility, which is mostly idiosyncratic and therefore uncompensated. (Mechanical below-market reversion isn't the claim either — the point is you can't expect a premium, not that you should expect a penalty.)",
      difficulty: "core",
      hints: [
        "Distinguish the realized past distribution from the forward-looking one. Which one does a sizing decision depend on?",
        "Consider all the companies fifteen years ago that were similar to yours. Where are the ones whose luck broke the other way — and do they appear in your evidence?",
        "If diversified investors set prices and can shed single-name risk for free, what premium can a single stock's extra volatility command?",
      ],
      strategy: "Think in populations, not anecdotes",
      guideRef: 1,
    },
    {
      id: "concentrate-q7",
      question:
        "Your stock has 45% volatility and your gamma is 3. You decide you can tolerate an annual concentration risk cost of at most 1% of wealth. Using cost ≈ 0.5 × gamma × w² × sigma², roughly what maximum fraction of wealth can the position be?",
      options: ["About 8%", "About 18%", "About 33%", "About 45%"],
      answerIndex: 1,
      explanation:
        "Set 0.5 × 3 × w² × 0.2025 = 0.01, so 0.30375 × w² = 0.01, giving w² ≈ 0.033 and w ≈ 0.18 — about 18% of wealth. It is no coincidence this lands inside the standard 10-20% guideline: that rule of thumb is exactly this computation for typical volatilities and risk aversions. Because cost scales with w², tolerance for cost translates into the square root of tolerance for size.",
      difficulty: "challenge",
      hints: [
        "This is the cost formula run in reverse: fix the cost at 0.01 and solve for w.",
        "First compute the constant: 0.5 × 3 × 0.45² = 0.5 × 3 × 0.2025.",
        "Solve w² = 0.01 / 0.304, then take the square root.",
      ],
      strategy: "Work backwards",
      guideRef: 2,
    },
    {
      id: "concentrate-q8",
      question:
        "A founder holds 80% of her wealth in her company's stock: expected return 6.5% per year, volatility 45%, gamma = 3. Approximately what is the position's certainty-equivalent return — the riskless return she should regard it as worth?",
      options: [
        "About +6.5% per year — expected return is what matters",
        "About +2% per year — positive but modest",
        "About −13% per year — she is effectively paying to hold it",
        "About −45% per year — equal to the volatility",
      ],
      answerIndex: 2,
      explanation:
        "The risk cost is 0.5 × 3 × 0.8² × 0.45² = 1.5 × 0.64 × 0.2025 ≈ 19.4% per year. Certainty-equivalent ≈ 6.5% − 19.4% ≈ −13% per year: in risk-adjusted terms she would rationally prefer a guaranteed loss of up to ~13% a year over keeping the position at this size. And this understates the problem — it ignores the chance that one unrecoverable event ends the compounding entirely. This is the arithmetic that makes 'extraordinary justification' the right standard for positions this large.",
      difficulty: "challenge",
      hints: [
        "Certainty-equivalent ≈ expected return minus the risk cost. Compute the cost term first.",
        "Risk cost = 0.5 × 3 × 0.8² × 0.45². Square the two inputs: 0.64 and 0.2025.",
        "The cost comes to about 19% per year. Now set it against the 6.5% expected return.",
      ],
      strategy: "Compute, don't guess",
      guideRef: 2,
    },
  ],
  interactive: "concentration-calc",
  interactiveTitle: "The Concentration Calculator",
  interactiveBlurb:
    "Put a fraction of your wealth in one volatile asset and see what the position really costs you per year in risk-adjusted terms.",
};
