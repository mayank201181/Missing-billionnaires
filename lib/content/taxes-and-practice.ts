import type { Topic } from "../types";

export const taxesAndPractice: Topic = {
  id: "taxes-and-practice",
  title: "Taxes, Costs & Putting It All Together",
  icon: "🧾",
  part: "Part IV — Spending & Real Life",
  order: 12,
  tagline: "The silent partner in your portfolio — and the book's complete decision process",
  intro:
    "Taxes and fees are the least glamorous topic in investing, which is exactly why they are among the most profitable to understand. The government is a *silent partner* in your portfolio: it takes a share of your gains, but — through capital-loss offsets — it also shares your losses, which changes both your return and your risk in ways most investors never think through. Meanwhile, the timing of tax payments (deferral) and the level of fees compound over decades into differences worth a quarter of your final wealth or more. This closing topic works through the tax and cost arithmetic, then assembles everything from the whole book — Merton sizing, gamma, spending rules, insurance, human capital — into one written checklist: the decision process the missing billionaires never had.",
  guide: [
    {
      heading: "The government as silent partner",
      discovery: {
        problem:
          "You face a 25% tax on investment gains, but losses can be fully offset against other gains, so the government effectively refunds 25% of any loss too. Before reading on: does this tax reduce your expected return, your risk, or both? And should it make you hold *less* of the risky asset — or something stranger?",
        idea:
          "Both — and by the *same proportion*. If every gain is clipped by 25% and every loss is cushioned by 25%, your after-tax outcome is exactly what you'd get from holding **75% of the position untaxed**. A symmetric tax with full loss offset is not a pure penalty; it is a forced *de-levering* of your bet. That reframing overturns the naive reaction that 'taxes make investing pointless' — and it has a surprising consequence for sizing.",
      },
      body:
        "Most investors think of taxes as a one-way haircut: the government skims your winnings. The book's sharper framing is that the government is a **silent partner** — it owns a slice of your portfolio, participating in the downside (via loss offsets) as well as the upside.\n\nWith a tax rate `t` and full loss offset, an after-tax position behaves like a pre-tax position of size `(1 − t)`. At t = 25%, holding $100,000 of stock is, in after-tax terms, like holding $75,000 tax-free: expected excess return scales by 0.75, and so does volatility.\n\nThis matters for sizing. Your gamma — your personal price of risk — applies to *after-tax* outcomes, because that is what you actually eat. If taxes shrink both your return and your risk, the risk-adjusted attractiveness of the bet is less damaged than the raw return numbers suggest. In fact, as the *Why it works* below shows, restoring your desired after-tax exposure can justify a somewhat **higher pre-tax risky share** than you would hold in a tax-free world. Taxes are a real cost — but the correct response is recalculation, not despair.",
      whyItWorks:
        "The Merton share is k = mu / (gamma × sigma²). A symmetric tax at rate t turns mu into (1 − t) × mu and sigma into (1 − t) × sigma. After-tax optimal exposure becomes (1 − t)mu / (gamma × (1 − t)² × sigma²) = k / (1 − t). At t = 25%, that is k × 4/3: you'd hold about a third more pre-tax exposure, so that your *after-tax* risk lands where gamma says it should. (Real tax codes limit loss offsets, so this is an upper bound — but the direction of the effect is the point.)",
      strategies: ["Reframe the problem", "Follow the symmetry"],
      keyPoints: [
        "A tax with full loss offset reduces expected return AND risk by the same factor (1 − t)",
        "A 25% tax makes a position behave like 75% of itself held tax-free — a forced de-levering, not a pure penalty",
        "Sizing on after-tax outcomes can justify a somewhat higher pre-tax risky share, not a lower one",
      ],
    },
    {
      heading: "Deferral: an interest-free loan from the taxman",
      discovery: {
        problem:
          "Two investors each earn 7% per year before tax for 30 years, facing a 25% capital-gains rate. The *trader* realizes all gains every year. The *holder* never sells until year 30, then pays 25% of the entire gain at once. Same return, same tax rate. Estimate each investor's final multiple on $1. How big can the gap possibly be?",
        idea:
          "The trader compounds at 7% × 0.75 = 5.25% and finishes with 1.0525^30 ≈ **4.6x**. The holder compounds the full 7% to 1.07^30 ≈ 7.6x, then pays 25% of the 6.6 gain, keeping 1 + 0.75 × 6.6 ≈ **5.96x** — about 28% more wealth from *timing alone*. Deferral let the holder keep compounding on the government's share for 30 years, interest-free.",
      },
      body:
        "Capital-gains tax has a peculiar feature: it is due only on **realization** — when you sell. Until then, the government's share of your gains stays invested in your account, growing alongside your own. Deferral is an **interest-free loan** from the taxman, and its size compounds.\n\nThe worked example makes the cost of turnover concrete. The annual trader's effective after-tax return is 5.25%; the buy-and-hold investor's is about 6.1% per year (5.96^(1/30)). That gap — roughly 0.85 percentage points per year — is the book's estimate of realistic tax drag: a high-turnover taxable investor can lose **1-2% per year** to taxes, while a disciplined buy-and-hold investor loses almost nothing until a final sale.\n\nThe practical rules follow directly:\n\n- Keep turnover low in taxable accounts; every voluntary sale hands back part of the loan\n- Prefer index-like strategies that rarely realize gains\n- When you *do* have losses, **harvest** them: realizing a loss creates an offset today while you stay invested in a similar exposure\n\nNote what this is not: it is not a reason to hold a bad investment forever. It is a *hurdle* — a switch must beat the incumbent by enough to cover the tax bill it triggers.",
      whyItWorks:
        "Paying tax annually converts the growth rate itself from r to r(1 − t) — the tax bites the *exponent*. Deferring converts only the final *level*: wealth grows at the full r and one multiplication by (1 − t) is applied to the gain at the end. Over long horizons, an exponent penalty compounds against you every year, while a one-time level penalty does not — which is why the gap widens the longer you hold.",
      strategies: ["Compare the exponent to the level", "Work a concrete 30-year example"],
      keyPoints: [
        "Tax is due on realization, so unrealized gains compound on the government's share too — an interest-free loan",
        "At 7% return and 25% tax over 30 years: annual trader ≈ 4.6x, buy-and-hold ≈ 5.96x",
        "High turnover costs a taxable investor roughly 1-2% per year; buy-and-hold costs near zero until the final sale",
      ],
    },
    {
      heading: "Asset location: same portfolio, better address",
      body:
        "Once you have chosen *what* to own and *how much*, there is a third free decision: **where** each asset lives. Most investors hold several account types — taxable brokerage accounts, and tax-sheltered retirement accounts where investments grow untaxed. The same portfolio can produce meaningfully different after-tax wealth depending purely on which assets sit in which accounts.\n\nThe principle is simple: put the **tax-inefficient** assets — the ones that throw off heavily taxed income every year — inside the shelter, and the **tax-efficient** assets outside, where their built-in deferral costs you little.\n\n- **Into tax-sheltered accounts**: taxable bonds (interest is taxed annually at high rates), REITs (required income distributions), and high-turnover strategies (constant gain realization)\n- **Into taxable accounts**: broad, low-turnover equity index funds, which mostly defer their gains anyway and enjoy favourable capital-gains rates\n\nA bond in a taxable account wastes the account's one advantage on an asset that needs shelter; an index fund in a retirement account wastes shelter on an asset that barely needed it. Swapping them changes nothing about your risk or expected pre-tax return — it is one of the rare genuinely free improvements in investing.\n\nRound out the taxable side with **loss harvesting**: when positions show losses, realize them to bank the offset, and redeploy into similar (not identical) exposure so your market position never changes.",
      keyPoints: [
        "Shelter the tax-inefficient assets: taxable bonds, REITs, high-turnover strategies belong in retirement accounts",
        "Hold tax-efficient, low-turnover equity index funds in taxable accounts",
        "Asset location and loss harvesting improve after-tax wealth with zero change to risk or pre-tax return",
      ],
    },
    {
      heading: "Fees: the tax you volunteer for",
      body:
        "Everything just said about taxes applies, compounded and simplified, to **fees** — with one difference: fees offer no loss offset, no deferral, and no shelter. A 1% annual management fee is a tax on the *exponent*, every year, in good markets and bad.\n\nThe arithmetic deserves to be seen once and never forgotten. Suppose gross returns are 7% and you pay 1% per year, netting 6%. Over 30 years your wealth ratio versus the fee-free investor is (1.06 / 1.07)^30 ≈ **0.755**. The fee that sounded like 'one percent' quietly consumed about a **quarter of your final wealth**. At typical active-management fee levels, the manager's skill must be substantial just to return you to where a cheap index fund would have left you — before taking any credit.\n\nThe book is blunt here because the stakes are so asymmetric. Expected returns are uncertain; your gamma is an estimate; markets will do what they will. But taxes and fees are *known, controllable, and compound relentlessly*. Minimizing them is the closest thing investing offers to a free lunch, and it requires no forecast at all — just low-cost funds, low turnover, sensible asset location, and the discipline to leave the machine alone.",
      whyItWorks:
        "A constant annual fee f reduces the growth factor from (1 + r) to (1 + r − f) every single year, so final wealth is scaled by ((1 + r − f)/(1 + r))^n. The base is slightly below 1, and raising it to the 30th power drives it far below 1 — the same exponent-versus-level logic that made annual tax realization so costly. Small annual leaks become large terminal losses precisely because they sit in the exponent.",
      strategies: ["Compare the exponent to the level"],
      keyPoints: [
        "Fees compound like an annual tax with no offsets: 1% per year at 7% returns costs about 25% of final wealth over 30 years",
        "Wealth ratio after fees = ((1 + r − f)/(1 + r))^n — small leaks in the exponent become large terminal losses",
        "Minimizing taxes and fees is the only reliable free lunch in investing",
      ],
    },
    {
      heading: "Putting it all together: the decision process",
      body:
        "The book closes by assembling every topic into a single written process — the thing the missing billionaires never had:\n\n- **1. Write down your total-wealth balance sheet**, including human capital, not just your brokerage statement\n- **2. Estimate expected excess returns and volatility** for your assets — humbly, blending long-run history with current valuations\n- **3. Choose your gamma** — your personal price of risk — and stick to it\n- **4. Compute the Merton share** and size positions on *total* wealth, sizing down for fat tails and estimation error\n- **5. Set spending by an amortization rule**, recomputed annually as wealth, horizon, and rates change\n- **6. Insure the catastrophic risks**: longevity with annuities, dependants with life insurance\n- **7. Minimize taxes and fees** — the only free lunches on the list\n- **8. Judge yourself on decision quality, not outcomes**, and re-run the whole process as conditions change\n\nNotice what the checklist does *not* contain: no market forecasts, no stock picks, no timing calls. Every step is a computation or a commitment you control.\n\nAnd so the book ends where it began. The families of 1900 did not lack investment ideas — they lived through the greatest equity market in history. They lacked a **decision process** for how much to risk, how much to spend, and how to judge themselves along the way. You now have one.",
      keyPoints: [
        "The eight-step checklist ties together balance sheet, return estimates, gamma, Merton sizing, amortized spending, insurance, and cost control",
        "Every step is a computation or commitment you control — no forecasts required",
        "The missing billionaires lacked a decision process, not investment ideas",
      ],
    },
  ],
  quiz: [
    {
      id: "taxes-q1",
      question:
        "Why does the book describe the government as a 'silent partner' rather than simply a cost?",
      options: [
        "Because tax rates are lowered whenever markets fall",
        "Because through capital-loss offsets it shares your losses as well as your gains",
        "Because retirement accounts let you avoid taxes entirely",
        "Because the government invests tax revenue back into the stock market",
      ],
      answerIndex: 1,
      explanation:
        "A partner participates in both directions. Taxes take a share of gains, but loss offsets mean the government also absorbs a share of losses — so taxes reduce your risk as well as your expected return. That symmetry is what makes the tax act like a de-levering of the position rather than a pure penalty.",
      difficulty: "warmup",
      strategy: "Follow the symmetry",
      guideRef: 0,
    },
    {
      id: "taxes-q2",
      question:
        "Deferral is called an 'interest-free loan from the taxman'. What creates the loan?",
      options: [
        "Capital-gains tax is only due when gains are realized by selling, so the government's share keeps compounding in your account",
        "Retirement accounts pay no tax at any point",
        "The government charges no interest on late tax payments",
        "Tax rates on long-held assets are always zero",
      ],
      answerIndex: 0,
      explanation:
        "Until you sell, the tax owed on your unrealized gains stays invested and grows alongside your own money. You eventually repay the 'principal' — the tax on the gain — but you keep all the compounding it earned in the meantime, which is exactly what an interest-free loan gives you.",
      difficulty: "warmup",
      guideRef: 1,
    },
    {
      id: "taxes-q3",
      question:
        "An investor earns 7% per year but realizes all gains annually at a 25% tax rate, compounding at 5.25% after tax. Roughly what multiple on $1 after 30 years?",
      options: ["About 2.9x", "About 3.8x", "About 4.6x", "About 5.95x"],
      answerIndex: 2,
      explanation:
        "1.0525^30 ≈ 4.64. Rule-of-72 check: at 5.25%, a doubling takes about 72/5.25 ≈ 14 years, so 30 years gives a bit over two doublings — between 4x and 5x. The buy-and-hold investor's ≈5.96x (a distractor here) shows what the same return delivers when tax is deferred to the end.",
      difficulty: "core",
      hints: [
        "Annual realization turns the growth rate itself into 7% × (1 − 0.25) = 5.25%. Compound that for 30 years.",
        "Use the rule of 72: at 5.25% per year, how many years per doubling?",
        "About 14 years per doubling means just over 2 doublings in 30 years: a bit more than 2^2.2 ≈ 4.6.",
      ],
      strategy: "Rule of 72 / doubling times",
      guideRef: 1,
    },
    {
      id: "taxes-q4",
      question:
        "You hold a taxable brokerage account and a tax-sheltered retirement account. Which placement follows the asset-location principle?",
      options: [
        "Equity index funds in the retirement account; taxable bonds and REITs in the brokerage account",
        "Split every asset 50/50 across both accounts to diversify",
        "Hold cash in the retirement account since it is the safest asset",
        "Taxable bonds, REITs, and high-turnover strategies in the retirement account; low-turnover equity index funds in the brokerage account",
      ],
      answerIndex: 3,
      explanation:
        "Shelter is scarce, so spend it on the assets that need it most: bonds and REITs generate annually taxed income, and high-turnover strategies realize gains constantly. Low-turnover equity index funds largely defer their own gains and get favourable capital-gains rates, so they lose little by sitting in the taxable account.",
      difficulty: "core",
      hints: [
        "Ask of each asset: how much tax does it generate per year if held in a taxable account?",
        "Bond interest and REIT distributions are taxed every year at high rates; an index fund mostly defers its gains.",
        "Put the heavily-taxed-every-year assets inside the shelter, and the self-sheltering assets outside.",
      ],
      strategy: "Match the scarce resource to the biggest need",
      guideRef: 2,
    },
    {
      id: "taxes-q5",
      question:
        "Gross returns are 7% per year and you pay a 1% annual fee for 30 years. Roughly what fraction of your final wealth does the fee consume, compared with paying no fee?",
      options: ["About 4%", "About 10%", "About 25%", "About 55%"],
      answerIndex: 2,
      explanation:
        "The wealth ratio is (1.06/1.07)^30 ≈ 0.755, so the fee consumes about a quarter of final wealth. The base 1.06/1.07 ≈ 0.9907 looks harmless, but raising a number slightly below 1 to the 30th power drives it far from 1 — annual leaks sit in the exponent, not the level.",
      difficulty: "core",
      hints: [
        "Compare two growth paths: 7% per year versus 6% per year, over 30 years.",
        "The ratio of final wealths is (1.06/1.07)^30. Estimate it: the base is about 0.991.",
        "0.991^30: losing roughly 0.9% per year for 30 years compounds to losing roughly a quarter, not 30 × 0.9% ≈ 27% exactly, but close — about 24.5%.",
      ],
      strategy: "Compare the exponent to the level",
      guideRef: 3,
    },
    {
      id: "taxes-q6",
      question: "Which of the following is NOT a step in the book's closing decision process?",
      options: [
        "Write down a total-wealth balance sheet that includes human capital",
        "Choose your gamma and stick to it",
        "Set spending with an amortization rule recomputed annually",
        "Identify the sectors likely to outperform next year and concentrate the portfolio in them",
      ],
      answerIndex: 3,
      explanation:
        "The checklist contains computations and commitments you control — balance sheet, return and risk estimates, gamma, Merton sizing, amortized spending, insurance, cost minimization, and judging decisions rather than outcomes. Sector forecasting is exactly the 'what to buy' game the book argues is dominated by the 'how much' decisions.",
      difficulty: "core",
      hints: [
        "The book's thesis: outcomes are dominated by 'how much', not 'what'. Which option is a 'what' decision?",
        "Every genuine step in the checklist requires no market forecast at all. One option is pure forecasting.",
      ],
      strategy: "Separate process from outcome",
      guideRef: 4,
    },
    {
      id: "taxes-q7",
      question:
        "Your no-tax Merton share in equities is 60%. A 25% tax on gains with full loss offset is introduced. What happens to your optimal PRE-tax equity share?",
      options: [
        "It stays at 60%, since return and risk fall by the same proportion",
        "It rises to about 80%, because the Merton share scales by 1/(1 − t)",
        "It falls to 45%, because expected return drops 25%",
        "It falls to about 34%, because return drops 25% and risk must be cut further for safety",
      ],
      answerIndex: 1,
      explanation:
        "The tax scales mu by 0.75 and sigma by 0.75, so mu/sigma² — the numerator of the Merton share over gamma — scales by 0.75/0.75² = 1/0.75 ≈ 1.33. Optimal pre-tax exposure becomes 60% × 4/3 = 80%, which delivers exactly the after-tax risk and return of the original 60% position in a tax-free world. 'Unchanged' is the tempting trap: the after-tax *exposure* is unchanged, but achieving it requires a larger pre-tax position.",
      difficulty: "challenge",
      hints: [
        "Write the Merton share k = mu/(gamma × sigma²), then apply the tax: mu becomes 0.75mu and sigma becomes 0.75sigma.",
        "The numerator scales by 0.75 but sigma² in the denominator scales by 0.75² = 0.5625. What is the net factor?",
        "0.75/0.5625 = 4/3. Multiply the original 60% share by 4/3.",
      ],
      strategy: "Follow the symmetry",
      guideRef: 0,
    },
    {
      id: "taxes-q8",
      question:
        "In the 30-year example (7% return, 25% tax), the buy-and-hold investor finishes with about 5.96x after paying tax at the end. What is that as an effective annual after-tax return, and what does the comparison with the annual trader show?",
      options: [
        "About 6.1% per year — deferral recovered roughly 0.85 points per year of the trader's 1.75-point tax drag",
        "Exactly 5.25% per year — the timing of the tax payment cannot change the effective rate",
        "Exactly 7% per year — a tax paid at the end has no effect on the compound rate",
        "About 4.7% per year — the large final tax bill makes deferral worse than paying annually",
      ],
      answerIndex: 0,
      explanation:
        "5.96^(1/30) ≈ 1.061, an effective after-tax return of about 6.1% per year, versus the trader's 5.25%. The full tax drag from 7% would be 1.75 points per year; deferral clawed back roughly half of it (about 0.85 points annually) purely by letting the government's share compound untouched for 30 years. Same assets, same tax rate — the entire difference is *when* the tax was paid.",
      difficulty: "challenge",
      hints: [
        "You need the annual rate g such that (1 + g)^30 = 5.96.",
        "Bracket it: 1.0525^30 ≈ 4.6 (too low) and 1.07^30 ≈ 7.6 (too high), so g is between 5.25% and 7%.",
        "5.96 is close to 6; note 1.06^30 ≈ 5.74 and 1.062^30 ≈ 6.08, so g ≈ 6.1%. Compare that to 5.25% and to the untaxed 7%.",
      ],
      strategy: "Bracket and refine",
      guideRef: 1,
    },
  ],
  interactive: "tax-drag",
  interactiveTitle: "The Tax Drag Meter",
  interactiveBlurb:
    "Turnover, tax rates, deferral: see how much of your compounding quietly leaks away — and how much low turnover and smart asset location give back.",
};
