import type { Post } from "@/lib/blog";

export const polarVsStripeForIndieMakers: Post = {
  "slug": "polar-vs-stripe-for-indie-makers",
  "title": "Polar vs Stripe for Indie Makers: Which One Should You Pick?",
  "seoTitle": "Polar vs Stripe for Indie Makers: Which to Pick",
  "description": "Polar or Stripe for your vibe-coded app? A plain-English comparison for solo makers: fees, sales tax, payouts by country, and switching later.",
  "date": "2026-10-22",
  "author": "Deepak",
  "readingMinutes": 7,
  "body": [
    {
      "type": "p",
      "text": "You've built your app with Claude Code, Cursor or Codex, and you've decided how to charge for it (if not, start with my guide on [how to charge for your vibe-coded app](/blog/charge-for-your-vibe-coded-app)). One decision is left before your first sale: **Polar or Stripe?**"
    },
    {
      "type": "p",
      "text": "I'm Deepak, a solo developer in Hyderabad, and I spend a lot of my time wiring both into apps built with AI agents. Short answer: both are good. The real difference is **who is the seller on paper**, and so who deals with sales tax."
    },
    {
      "type": "p",
      "text": "Every fee, country and feature below comes from Polar's and Stripe's own pages, as of 20 Oct 2026, linked so you can check them again. Prices and rules change, so treat this as a map, not the final word."
    },
    {
      "type": "h2",
      "text": "Who's the seller? Merchant of record in plain words"
    },
    {
      "type": "p",
      "text": "Whoever is the seller on paper has to charge the right sales tax or VAT for the buyer's country, pay it to the right tax office, and send a proper receipt."
    },
    {
      "type": "p",
      "text": "**Polar is a merchant of record**: a company that acts as the seller for you. Your customer buys from Polar, Polar collects and pays the tax, then pays you what's left after its fee. [Polar's own explanation](https://polar.sh/docs/merchant-of-record/introduction) says it takes on the liability for international sales taxes."
    },
    {
      "type": "p",
      "text": "**With Stripe, you are the seller** (in its standard setup), so tax is your job. Stripe has an add-on for that, Stripe Tax. As of 20 Oct 2026, [its pricing page](https://stripe.com/tax/pricing) lists two plans: Tax Basic, which works out and collects the right tax where you're registered, and Tax Complete, which also handles tax registrations and filings for you. Even then, you're still the seller, so those registrations are in your name."
    },
    {
      "type": "p",
      "text": "Stripe now also has its own merchant of record option, [Managed Payments](https://docs.stripe.com/payments/managed-payments), for digital products like software. It's only open to businesses based in certain countries."
    },
    {
      "type": "h2",
      "text": "Fees, without the guesswork"
    },
    {
      "type": "p",
      "text": "Standard published rates, as of 20 Oct 2026:"
    },
    {
      "type": "p",
      "text": "**Polar** ([fees page](https://polar.sh/docs/merchant-of-record/fees)):"
    },
    {
      "type": "ul",
      "items": [
        "The free Starter plan charges 5% + 50¢ per sale, for accounts created on or after 27 May 2026.",
        "Paid plans, from $20 a month, lower that rate. The page shows roughly how much you need to sell before each one pays for itself.",
        "Add 1.5% for cards from outside the US.",
        "Payouts to your bank go through Stripe and carry Stripe's payout fees, which Polar lists on the same page.",
        "Tax handling is included. There's no tax add-on to buy."
      ]
    },
    {
      "type": "p",
      "text": "**Stripe** ([US pricing page](https://stripe.com/pricing)):"
    },
    {
      "type": "ul",
      "items": [
        "2.9% + 30¢ per successful payment with a US card.",
        "Add 1.5% for international cards, and another 1% if the payment needs a currency conversion.",
        "Subscriptions run on Stripe Billing, and [Billing's pay-as-you-go price](https://stripe.com/billing/pricing) is 0.7% of billing volume.",
        "Tax is separate: Stripe Tax Basic is 0.5% per transaction where you're registered (for its no-code setups), and Tax Complete starts at $90 a month on a one-year contract.",
        "Managed Payments, if you can use it, adds 3.5% per transaction on top of the normal payment fees."
      ]
    },
    {
      "type": "p",
      "text": "Stripe's rates depend on where your business is ([its India pricing page](https://stripe.com/in/pricing), for example, lists different rates), so look at the page for your country."
    },
    {
      "type": "p",
      "text": "So on the sticker, Polar's fee per sale is higher than Stripe's basic card rate. That's expected: part of what you pay Polar for is the tax work. To compare fairly, add to Stripe's rate the things Polar already includes:"
    },
    {
      "type": "ul",
      "items": [
        "the tax add-on, or your own time doing tax,",
        "the Billing fee, if you sell subscriptions,",
        "the extra for international cards and currency conversion,",
        "an accountant's time for registering and filing in the places you sell."
      ]
    },
    {
      "type": "p",
      "text": "Which comes out cheaper depends on where your customers are, what you sell and how much, so run a normal month you'd hope for through both pricing pages. One thing is the same on both: if you refund a sale, the original payment fee isn't given back ([Polar](https://polar.sh/docs/features/refunds), [Stripe](https://docs.stripe.com/refunds))."
    },
    {
      "type": "h2",
      "text": "Payouts by country: check this first"
    },
    {
      "type": "p",
      "text": "This is the step people skip, and it can stop you cold. Before you build anything, check that the company can pay money into a bank account in your country."
    },
    {
      "type": "p",
      "text": "**Polar** pays you out through Stripe Connect Express, and its [supported countries page](https://polar.sh/docs/merchant-of-record/supported-countries) lists every country it can pay out to. Its [payout account page](https://polar.sh/docs/features/finance/accounts) adds that the bank account must be in the same country as you (or your business), in the local currency, and that most \"borderless\" accounts like Wise or Payoneer won't pass. Polar also reviews every account, with an ID check, before the first payout, and its [account reviews page](https://polar.sh/docs/merchant-of-record/account-reviews) says that can take up to 14 days. Build first, then submit."
    },
    {
      "type": "p",
      "text": "**Stripe** lists the countries where you can open an account on its [global availability page](https://stripe.com/global). If your country isn't there, you can't use Stripe directly. Managed Payments has a shorter list of [supported business locations](https://docs.stripe.com/payments/managed-payments/eligibility)."
    },
    {
      "type": "h3",
      "text": "A note for makers in India"
    },
    {
      "type": "p",
      "text": "I'm in India, so I read these pages carefully. As of 20 Oct 2026:"
    },
    {
      "type": "ul",
      "items": [
        "[Stripe's India page](https://docs.stripe.com/india-accept-international-payments) says Stripe is invite-only here, the account must be a registered Indian business (sole proprietorship, LLP or company), not an individual, and taking payments from abroad needs export details such as a transaction purpose code.",
        "India is on Polar's payout list. Polar's FAQ says payouts work here even though Stripe is invite-only, because your customers buy from Polar and Stripe only sends you the money.",
        "India isn't on the list of business locations for Stripe's Managed Payments."
      ]
    },
    {
      "type": "p",
      "text": "These rules change. Read both pages yourself, and talk to a CA before your first real sale."
    },
    {
      "type": "h2",
      "text": "Features a small app actually needs"
    },
    {
      "type": "p",
      "text": "For a typical small app, both cover the basics:"
    },
    {
      "type": "ul",
      "items": [
        "**Checkout page:** both give you a ready-made checkout page, so card details never touch your app ([Polar checkout links](https://polar.sh/docs/features/checkout/links), [Stripe Checkout](https://docs.stripe.com/payments/checkout)).",
        "**Subscriptions:** both.",
        "**A billing page for customers:** Polar's [customer portal](https://polar.sh/docs/features/customer-portal/introduction) lets customers cancel, update their card and download invoices, and it's always on. Stripe has a [no-code customer portal](https://docs.stripe.com/customer-management) for updating payment details and subscriptions.",
        "**Refunds:** both do full and partial refunds. Worth knowing: Polar's [refunds page](https://polar.sh/docs/features/refunds) says it may refund a sale itself within 60 days to head off a chargeback, even under a no-refunds policy.",
        "**Discount codes:** both. Polar calls them [discounts](https://polar.sh/docs/features/discounts), Stripe calls them [coupons and promotion codes](https://docs.stripe.com/billing/subscriptions/coupons), and both can apply once, for a few months, or forever.",
        "**License keys:** Polar has [license keys built in](https://polar.sh/docs/features/benefits/license-keys), with device limits and automatic removal when a subscription ends. I didn't find a built-in license key feature in Stripe's docs, so plan on your app creating them.",
        "**Usage and credits:** both let you charge by usage and give customers credits ([Polar credits](https://polar.sh/docs/features/usage-based-billing/credits), [Stripe usage-based billing](https://docs.stripe.com/billing/subscriptions/usage-based))."
      ]
    },
    {
      "type": "p",
      "text": "Also check what you're allowed to sell. Polar is built for software and digital products, and its [acceptable use page](https://polar.sh/docs/merchant-of-record/acceptable-use/introduction) rules out things like physical goods and human services. Stripe's standard setup isn't limited to digital products, but Managed Payments is."
    },
    {
      "type": "p",
      "text": "And on both, test with test cards, not your own real card: Polar's account reviews page and [Stripe's testing docs](https://docs.stripe.com/testing) both say so. To check your live Polar setup, Polar suggests a free product or a 100% discount code."
    },
    {
      "type": "h2",
      "text": "Switching later"
    },
    {
      "type": "p",
      "text": "Products and prices are easy to set up again in the other dashboard. Saved cards, active subscriptions and customer history are not."
    },
    {
      "type": "p",
      "text": "Polar has a [guide for moving from Stripe](https://polar.sh/docs/migrate) that covers customers, products, subscriptions and saved cards (copied through Stripe's own secure process). As of 20 Oct 2026 it says the tool is rolling out gradually, and that Stripe accounts in India can't use the automatic flow. Going the other way, Stripe says it will [transfer your card data to a new provider](https://docs.stripe.com/get-started/data-migrations/pan-export) that meets the card industry's top security level."
    },
    {
      "type": "p",
      "text": "Either way, switching is a project, not a button. What makes it smaller is keeping \"who has access\" in your own database, and letting payment messages update that one place. (Developers call these webhooks: automatic notes from Polar or Stripe saying \"this person paid\" or \"this person cancelled\".) If payment details are spread through every page of your app, a switch touches every page. If they live in one place, you change one place."
    },
    {
      "type": "p",
      "text": "That habit also protects you from the most painful bug: customers get locked out the same way on both. I wrote up the fixes in [I paid but can't get in](/blog/customer-paid-but-no-access)."
    },
    {
      "type": "h2",
      "text": "My rule of thumb"
    },
    {
      "type": "ul",
      "items": [
        "**Solo, selling software or a digital product to people in many countries, and you don't want to deal with tax?** Start with Polar.",
        "**Already on Stripe, have a business set up to handle tax, or need something only Stripe does?** Use Stripe.",
        "**Want Stripe, but with Stripe as the seller on paper?** Look at Managed Payments, if your business is in one of its supported countries."
      ]
    },
    {
      "type": "p",
      "text": "Whichever you pick, check payouts to your country first, read what each lets you sell, and have a short chat with an accountant. Then, before launch, run through the [pre-launch checklist in my first guide](/blog/add-payments-to-ai-built-app). The bugs it covers happen on both."
    },
    {
      "type": "h2",
      "text": "Where ShipToPaid fits"
    },
    {
      "type": "p",
      "text": "I built [ShipToPaid](https://www.shiptopaid.com) so this choice doesn't change how you work with your agent. The [free lite pack](https://github.com/shiptopaid/shiptopaid-lite) covers Polar: checkout tied to the logged-in user, properly checked payment messages and a short launch check. The full pack adds the same for Stripe, plus access that follows payments. You don't need either to use this guide."
    }
  ]
};
