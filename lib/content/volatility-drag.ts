import type { Topic } from "../types";

export const volatilityDrag: Topic = {
  id: "volatility-drag",
  title: "Volatility Drag & Compounding",
  icon: "🎢",
  part: "Part II — Risk, Return & Utility",
  order: 5,
  tagline: "Why a 0% average return can cost you 25% of your money",
  intro:
    "Gain 50%, then lose 50%: your average return is exactly zero, yet a quarter of your money is gone. That gap between the return you *average* and the return you *compound* is volatility drag, and it quietly shapes every long-horizon outcome in this book. This chapter builds the single most useful approximation in the whole framework — compound growth is roughly the average return minus half the variance — and then puts it to work. It explains why the 'average' projection of your future wealth is a fantasy propped up by a few lucky paths while the typical outcome compounds at a lower rate, and why levering up even a genuinely good investment eventually destroys it. By the end, the Kelly and Merton sizing rules of the coming chapters will feel less like formulas and more like common sense.",
  guide: [
    {
      heading: "The 25% hole in a 0% average",
      discovery: {
        problem:
          "You invest $10,000. In year one it gains 50%. In year two it loses 50%. Before doing any arithmetic, answer two questions: what was your *average* annual return, and how much money do you actually have?",
        idea:
          "The average return is (50% − 50%) / 2 = **0%**. But your wealth is $10,000 × 1.5 × 0.5 = **$7,500** — down 25%. Swap the order and nothing changes: 0.5 × 1.5 is still 0.75. A zero average return coexists with a very real loss, because wealth compounds by *multiplication*, and the average of the returns is not the return of the average.",
      },
      body:
        "Two different summaries of the same pair of returns give two different answers, and only one of them pays for groceries.\n\nThe **arithmetic mean** adds the yearly returns and divides by the count: (50% + (−50%)) / 2 = 0%. The **geometric mean** asks a more honest question: what *constant* yearly return would have produced the same final wealth? Here that is (0.75)^(1/2) − 1 ≈ **−13.4% per year**. Your account compounds at the geometric rate. What you eat is the geometric mean.\n\nThe asymmetry behind this is worth internalizing: a −50% year needs a +100% year to repair it, not a +50% one. Losses hurt more than equal-sized gains help, because each return multiplies whatever base the previous returns left behind. A bad year shrinks the base on which future good years operate.\n\nThe gap between the two means is not a quirk of extreme numbers. *Any* volatility at all opens a wedge between average return and compound return, and — as the next section shows — the wedge grows with the *square* of the volatility. A strategy can truthfully advertise a healthy average return and still grind its investors down over time.",
      strategies: ["Try small cases", "Multiply, don't add"],
      keyPoints: [
        "+50% then −50% (in either order) leaves you at 0.75x — down 25% despite a 0% average return",
        "Arithmetic mean = simple average of returns; geometric mean = the constant rate that matches your actual compound outcome",
        "Wealth compounds at the geometric rate: 'what you eat is the geometric mean'",
      ],
    },
    {
      heading: "The variance drain: g ≈ mu − sigma²/2",
      body:
        "The wedge between the two means has a beautifully simple size. If an investment has arithmetic mean return `mu` and volatility (standard deviation) `sigma`, its compound growth rate is approximately:\n\n**g ≈ mu − sigma²/2**\n\nHalf the variance is simply *subtracted* from the average return. Haghani and White call this the **variance drain**.\n\nWork a realistic example: stocks with mu = 7% and sigma = 20%. The variance is 0.20² = 0.04, half of it is 0.02, so g ≈ 7% − 2% = **5%**. Two full percentage points of the advertised average return never reach your compounded wealth — every year, forever.\n\nCheck it against the opening puzzle: mu = 0% and sigma = 50% give g ≈ 0 − 0.5²/2 = −12.5% per year, close to the exact −13.4% we computed. The approximation is excellent for ordinary market volatility and only drifts at extreme swings.\n\nNote what the formula rewards. Cutting volatility in half cuts the drag to a *quarter*, because the drag scales with sigma *squared*. Diversification, which lowers sigma without necessarily lowering mu, is therefore not just a comfort blanket — it is a direct, mechanical boost to the growth rate you actually compound at.",
      whyItWorks:
        "Compound growth is the average of *log* returns, and for small r, ln(1+r) ≈ r − r²/2. Average that expansion over many years: the r term averages to mu, and the r² term averages to (roughly) the variance, sigma². So the average log return — the growth rate you compound at — is about mu − sigma²/2. Averaging in logs knocks exactly half the variance off the top.",
      strategies: ["Take logs", "Approximate, then check against an exact case"],
      keyPoints: [
        "Compound growth g ≈ mu − sigma²/2: half the variance is drained from the average return",
        "mu = 7%, sigma = 20% → g ≈ 7% − 2% = 5%",
        "Drag scales with sigma squared, so halving volatility quarters the drag — diversification directly raises compound growth",
      ],
    },
    {
      heading: "Mean vs median: the average future isn't yours",
      discovery: {
        problem:
          "Run 10,000 parallel universes forward 30 years, each holding the same volatile portfolio with a 7% average return. A statistician truthfully reports: 'average final wealth across the universes grew at 7% per year.' Should *you* — living in exactly one universe — expect your wealth to grow at 7%?",
        idea:
          "No. The *average* across universes really does grow at the arithmetic 7%, but that average is dragged upward by a small number of jackpot paths that compounded lucky streak upon lucky streak. The **median** universe — the typical one, the outcome you should actually plan around — compounds at the geometric rate, about 5%. Over 30 years that is the difference between 7.6x and 4.3x your money.",
      },
      body:
        "Both statements are true at once: *mean* wealth grows at the arithmetic rate mu, and the *typical* outcome grows at the geometric rate mu − sigma²/2. There is no contradiction, only skew.\n\nBecause returns compound multiplicatively, the distribution of final wealth is lognormal-shaped: a hard floor at zero, a big pile of ordinary outcomes, and a long right tail of extraordinary ones. The mean is hostage to that tail. A handful of paths that happened to string good years together contribute enormous terminal wealth and haul the average up; the median just sits in the middle of the pile, unimpressed.\n\nAnd the skew *worsens* with horizon. Each additional year lets the lucky tail stretch further, so mean and median wealth drift apart geometrically — after 30 years at mu = 7%, sigma = 20%, the mean projection is roughly 75% higher than the median outcome.\n\nThis is why glossy retirement projections built on average returns systematically flatter the future. You do not get to live in the average of all universes; you get one draw. Planning should be anchored to the median — the geometric rate — with the arithmetic mean understood as a statistical curiosity about worlds you will mostly never see.",
      strategies: ["Think in populations, not anecdotes", "Ask 'mean of what, for whom?'"],
      keyPoints: [
        "Mean wealth across possible futures grows at the arithmetic rate; the median (typical) outcome grows at the geometric rate",
        "The mean is pulled up by a few extremely lucky paths in the right tail of a lognormal-shaped distribution",
        "The mean–median gap widens with horizon, so long-run projections based on average returns overstate the typical result",
      ],
    },
    {
      heading: "Leverage: the parabola of growth",
      discovery: {
        problem:
          "Stocks offer mu = 7%, sigma = 20%, so an unlevered holder compounds at about 5%. Suppose you can lever cheaply: at exposure L, your return is scaled to L × mu and your volatility to L × sigma. If some stock exposure is good, is more always better? What does compound growth look like at L = 2, L = 3, L = 5?",
        idea:
          "Compound growth becomes **g(L) = L·mu − L²·sigma²/2** — a downward-opening *parabola* in L. Doubling exposure doubles the return term but **quadruples** the drag term. At L = 2, g = 14% − 8% = 6%; at L = 3, g = 21% − 18% = 3%; at L = 3.5, growth is exactly **zero**; beyond that, more exposure to a genuinely good asset compounds you toward ruin.",
      },
      body:
        "Substituting L·mu and L·sigma into the variance-drain formula gives g(L) = L·mu − L²·sigma²/2. The linear term is what leverage promises; the quadratic term is what it costs. With mu = 7% and sigma = 20%:\n\n- g(1.0) = 7% − 2% = 5%\n- g(1.75) = 12.25% − 6.125% ≈ 6.1% — the peak\n- g(2.0) = 14% − 8% = 6%\n- g(3.5) = 24.5% − 24.5% = 0%\n\nThe peak sits at **L\\* = mu/sigma²** = 0.07/0.04 = 1.75. That expression should look familiar by the end of this book: it is exactly the quantity at the heart of the **Kelly criterion** and the **Merton share**. The sizing chapters ahead are, at bottom, an exploration of this parabola — including why a rational investor with real risk aversion should sit meaningfully *below* the growth-maximizing peak, not at it.\n\nThe parabola's symmetry delivers a memorable warning: growth at 2L\\* is back to zero, the same as holding cash. Betting twice the optimal amount on a great asset earns you, in the long run, nothing. There is such a thing as too much of a good thing, and the formula tells you precisely where it begins.",
      whyItWorks:
        "Drag is half the variance, and variance is volatility squared. Scaling exposure by L scales volatility to L·sigma, so variance scales to L²·sigma² — the drag term inherits the square while the return term stays linear. A linear benefit minus a quadratic cost is a parabola; setting its slope to zero (mu − L·sigma² = 0) puts the peak at L* = mu/sigma², and a parabola through zero at L = 0 must return to zero at 2L*.",
      strategies: ["Consider extremes", "Find the peak of the parabola"],
      keyPoints: [
        "With leverage L, compound growth is g(L) = L·mu − L²·sigma²/2: return scales linearly, drag scales with the square",
        "Growth peaks at L* = mu/sigma² — the Kelly/Merton quantity previewed here",
        "At double the optimal exposure, compound growth is back to zero; beyond the peak, more of a good asset makes you poorer",
      ],
    },
    {
      heading: "Time doesn't heal it — and a note on rebalancing",
      body:
        "A tempting escape: 'volatility washes out if I just hold long enough.' It doesn't. The drag applies to the growth *rate*, so its cumulative cost grows with every year of compounding rather than fading. At mu = 7%, sigma = 20%, the typical path compounds at 5% in year one, in year thirty, and in year one hundred; the two lost points are a permanent toll, not a startup cost.\n\nTime does change the *shape* of risk, in a way that fools people. The probability of ending below your starting point falls as the horizon lengthens — with a positive growth rate, ever more paths finish ahead. But the *size* of the shortfall in the bad tail keeps growing, because a bad multi-decade draw compounds too. Long horizons make losing less likely and, simultaneously, make the losses that do occur enormous. 'Stocks are safe in the long run' and 'volatility drag is permanent' are both true, about different things.\n\nOne technical footnote, kept light. The clean formula g = mu − sigma²/2 describes a portfolio *continuously rebalanced* to a constant risky fraction — sell after rallies, buy after dips, holding exposure fixed. A buy-and-hold position instead lets its exposure drift with the market, so its long-run arithmetic works out slightly differently. The distinction matters for precision, but the headline survives either way: volatility taxes compound growth, and the tax never expires.",
      whyItWorks:
        "Median wealth after T years is roughly (1+g)^T with g = mu − sigma²/2, so the drag compounds for exactly as long as the money does — nothing in the formula decays with T. Meanwhile the spread of outcomes grows like sigma times the square root of T: slower than the mean's straight-line-in-T growth (so the chance of loss falls) but without bound (so the worst tails keep widening in dollars).",
      keyPoints: [
        "Volatility drag reduces the growth rate itself, so its cost compounds with time rather than washing out",
        "Longer horizons cut the probability of loss but grow the size of the bad-tail shortfall",
        "The g ≈ mu − sigma²/2 formula strictly describes a constantly-rebalanced constant fraction; buy-and-hold differs subtly",
      ],
    },
  ],
  quiz: [
    {
      id: "voldrag-q1",
      question:
        "You invest $10,000. It gains 50% the first year, then loses 50% the second year. Where do you end up?",
      options: [
        "$10,000 — the gain and the loss cancel out",
        "$7,500 — down 25%",
        "$5,000 — down 50%",
        "$12,500 — up 25%",
      ],
      answerIndex: 1,
      explanation:
        "Wealth compounds by multiplication: $10,000 × 1.5 × 0.5 = $7,500, and the order of the two years doesn't matter. The arithmetic average of +50% and −50% is 0%, but your account tracks the product of growth factors, not the average of returns. A −50% year needs a +100% year to repair it, not a +50% one.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "voldrag-q2",
      question:
        "Which quantity determines the long-run compound growth of your actual wealth — the return 'you eat'?",
      options: [
        "The arithmetic mean of yearly returns",
        "The single best year's return",
        "The geometric (compound) mean of yearly returns",
        "The standard deviation of yearly returns",
      ],
      answerIndex: 2,
      explanation:
        "The geometric mean is the constant yearly return that would replicate your actual final wealth, so it is by definition what your money compounds at. The arithmetic mean is always at least as high, and the gap between them — roughly half the variance — is the volatility drag.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "voldrag-q3",
      question:
        "A portfolio has an average (arithmetic) return of mu = 7% per year and volatility sigma = 20%. Using the variance-drain approximation, what compound growth rate should the typical investor expect?",
      options: ["About 7%", "About 6.6%", "About 5%", "About 3%"],
      answerIndex: 2,
      explanation:
        "The approximation is g ≈ mu − sigma²/2. Work in decimals: sigma² = 0.20² = 0.04, and half of that is 0.02, i.e. two percentage points. So g ≈ 7% − 2% = 5% — two points of the advertised average never reach compounded wealth.",
      difficulty: "core",
      hints: [
        "The drag equals half the *variance*, and variance is volatility squared — computed in decimals, not percentage points.",
        "sigma = 0.20, so sigma² = 0.04. Take half of it, then convert back to percentage points.",
        "Half of 0.04 is 0.02, i.e. 2 percentage points. Subtract that from 7%.",
      ],
      strategy: "Approximate, then check against an exact case",
      guideRef: 1,
    },
    {
      id: "voldrag-q4",
      question:
        "Why does the compound growth rate come out roughly *half the variance* below the average return — where does the 1/2 come from?",
      options: [
        "From the expansion ln(1+r) ≈ r − r²/2: compounding averages log returns, and the r²/2 term averages to half the variance",
        "Because taxes remove roughly half of the gains earned in volatile years",
        "Because a volatile portfolio loses money in roughly half of all years",
        "Because the geometric mean is defined as exactly half the arithmetic mean",
      ],
      answerIndex: 0,
      explanation:
        "Compound growth is the average of log returns, and for modest r, ln(1+r) ≈ r − r²/2. Averaged over many years, the r term gives mu while the r²/2 term gives roughly sigma²/2, so g ≈ mu − sigma²/2. The 1/2 is a mathematical constant from the log expansion, not a fact about taxes, loss frequency, or definitions.",
      difficulty: "core",
      hints: [
        "Take logs: compound growth over many years is the *average of the log returns*, since logs turn products into sums.",
        "Expand ln(1+r) as a series for small r. Which term comes right after r, and what does it average to across years?",
        "ln(1+r) ≈ r − r²/2, and the average of r² across years is approximately the variance, sigma².",
      ],
      strategy: "Take logs",
      guideRef: 1,
    },
    {
      id: "voldrag-q5",
      question:
        "In a simulation of 10,000 possible 30-year futures for a volatile portfolio, *average* final wealth grows at the full arithmetic rate. Why is the median (typical) outcome noticeably lower?",
      options: [
        "Simulations systematically understate returns because they ignore dividends",
        "The median compounds at the arithmetic rate too, just with more sampling noise",
        "Exactly half the paths lose money, which mechanically pins the median below the mean",
        "The average is hauled up by a small number of extremely lucky paths; the median sits with the ordinary paths, which compound at the lower geometric rate",
      ],
      answerIndex: 3,
      explanation:
        "Multiplicative compounding produces a lognormal-shaped distribution: a floor at zero, a pile of ordinary outcomes, and a long right tail of jackpot paths. The mean is dragged up by that tail, while the median — the outcome you should plan around — compounds at roughly mu − sigma²/2. Most paths can lie below the mean even while the mean grows at the full arithmetic rate.",
      difficulty: "core",
      hints: [
        "Picture the histogram of final wealth across the 10,000 futures. Is it symmetric around its average?",
        "Compounding multiplies, so outcomes are lognormal-shaped: bounded below by zero but with a long right tail of lucky streaks.",
        "A long right tail pulls the mean far above the median; the median compounds at the geometric rate mu − sigma²/2.",
      ],
      strategy: "Think in populations, not anecdotes",
      guideRef: 2,
    },
    {
      id: "voldrag-q6",
      question:
        "Stocks offer mu = 7%, sigma = 20% (compound growth ≈ 5% unlevered). Ignoring borrowing costs, what happens to compound growth if you lever from 1x to 2x?",
      options: [
        "It doubles from 5% to 10%, since leverage scales everything proportionally",
        "It rises only from 5% to 6%: the return term doubles to 14%, but the drag quadruples from 2% to 8%",
        "It falls from 5% to 3%, because leverage always reduces compound growth",
        "It is unchanged at 5%, because leverage scales return and drag by the same factor",
      ],
      answerIndex: 1,
      explanation:
        "With leverage L, growth is g(L) = L·mu − L²·sigma²/2: the return term is linear in L but the drag term is quadratic. At L = 2 the return term becomes 14% while the drag becomes 4 × 2% = 8%, leaving g = 6%. Doubling exposure bought only one extra point of compound growth — a preview of why still more leverage soon subtracts growth instead.",
      difficulty: "core",
      hints: [
        "Write both terms of g(L) = L·mu − L²·sigma²/2 at L = 1, then again at L = 2.",
        "At L = 1: g = 7% − 2% = 5%. Doubling L doubles the first term — but the second term contains L².",
        "The drag becomes 2² × 2% = 8%, so g(2) = 14% − 8%.",
      ],
      strategy: "Track both terms",
      guideRef: 3,
    },
    {
      id: "voldrag-q7",
      question:
        "An asset has mu = 6% and sigma = 20%, and g(L) = L·mu − L²·sigma²/2. At what leverage L is compound growth maximized, and what happens well beyond that point?",
      options: [
        "L = 1.5; beyond it more exposure *lowers* compound growth, and by L = 3 growth is back to zero",
        "L = 3.0; growth rises until then, after which it plateaus at its maximum",
        "L = 0.75; any leverage above 1x already produces negative compound growth",
        "There is no maximum — as long as mu is positive, more exposure always raises compound growth",
      ],
      answerIndex: 0,
      explanation:
        "g(L) is a downward parabola; setting its slope mu − L·sigma² to zero gives L* = mu/sigma² = 0.06/0.04 = 1.5, the Kelly/Merton quantity. By symmetry, a parabola worth zero at L = 0 returns to zero at 2L* = 3: check g(3) = 18% − 9 × 2% = 0. Past the peak, every extra unit of a genuinely good asset makes the typical long-run outcome worse.",
      difficulty: "challenge",
      hints: [
        "g(L) = L·mu − L²·sigma²/2 is a downward-opening parabola in L. Where does a parabola peak?",
        "Set the slope to zero: mu − L·sigma² = 0, so L* = mu/sigma². Plug in mu = 0.06 and sigma² = 0.04.",
        "L* = 1.5. The parabola passes through zero at L = 0, so by symmetry it hits zero again at 2L* — verify g(3) yourself.",
      ],
      strategy: "Find the peak of the parabola",
      guideRef: 3,
    },
    {
      id: "voldrag-q8",
      question:
        "A portfolio has mu = 7%, sigma = 20%. Over 30 years, roughly what wealth multiples do the *median* outcome and the *mean* (average across futures) outcome reach?",
      options: [
        "Both about 7.6x — over 30 years volatility washes out and mean equals median",
        "Median about 7.6x, mean about 4.3x — averaging across futures dilutes the lucky paths",
        "Median about 4.3x, mean about 7.6x — the typical investor gets barely more than half the 'average' projection",
        "Median about 2x, mean about 20x — the median barely grows at all",
      ],
      answerIndex: 2,
      explanation:
        "The median compounds at g ≈ 7% − 2% = 5%, giving 1.05^30 ≈ 4.3x; mean wealth compounds at the arithmetic 7%, giving 1.07^30 ≈ 7.6x. The gap is pure volatility drag plus skew: a few jackpot paths carry the mean while the typical path delivers 4.3x. Note the gap has *widened* with horizon — time amplifies the mean–median split rather than healing it.",
      difficulty: "challenge",
      hints: [
        "Two different rates: the median compounds at the geometric rate g ≈ mu − sigma²/2, the mean at the arithmetic rate mu.",
        "g = 7% − 2% = 5%. You need 1.05^30 and 1.07^30 — use rule-of-72 doubling times instead of brute force.",
        "At 5%, doubling takes ~14.4 years, so ~2.1 doublings ≈ 4.3x. At 7%, doubling takes ~10.3 years, so ~2.9 doublings ≈ 7.6x.",
      ],
      strategy: "Rule of 72 / doubling times",
      guideRef: 2,
    },
  ],
  interactive: "vol-drag",
  interactiveTitle: "The Volatility Drag Machine",
  interactiveBlurb:
    "Same average return, different volatility, wildly different destinations. Watch volatility eat compound growth in real time.",
};
