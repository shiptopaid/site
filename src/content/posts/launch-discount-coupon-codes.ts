import type { Post } from "@/lib/blog";

export const launchDiscountCouponCodes: Post = {
  "slug": "launch-discount-coupon-codes",
  "title": "How to Run a Launch Discount in Your Vibe-Coded App (Coupon Codes Without Surprises)",
  "seoTitle": "How to Add Coupon Codes to Your Vibe-Coded App",
  "description": "Running a launch price or coupon code in your AI-built app? One-time vs repeating discounts, limits and expiry, honest pricing copy, and what to test.",
  "date": "2026-11-12",
  "author": "Deepak",
  "readingMinutes": 8,
  "body": [
    {
      "type": "p",
      "text": "You want to give your first customers a better deal: a lower launch price, a code for a community, or a free code for a friend who'll test things. It sounds like one setting. Then the questions start. Does the code work on the yearly plan? What does someone pay in month four? Can a code you shared with ten people end up on a coupon site?"
    },
    {
      "type": "p",
      "text": "I'm Deepak, a developer in Hyderabad. I build side projects with AI agents and spend a lot of my time wiring payments into apps made with Claude Code, Cursor and Codex. This guide covers launch prices and coupon codes in plain words: what to decide, what Polar and Stripe let you set, and what to test. No code needed."
    },
    {
      "type": "p",
      "text": "Everything I say about Polar and Stripe comes from their own docs, as of 4 Nov 2026, linked so you can check again. Re-read them before you rely on a detail."
    },
    {
      "type": "h2",
      "text": "The short answer"
    },
    {
      "type": "p",
      "text": "Before your agent builds \"a discount\", decide three things:"
    },
    {
      "type": "ul",
      "items": [
        "**Who gets it.** Everyone until a date (a launch price), or only people with a code.",
        "**How long it lasts.** On a one-time purchase that's simple. On a subscription, the discount can cover the first payment only, a set number of months, or every payment forever.",
        "**Its limits.** When it stops, how many uses, which products, and whether it's for new customers only."
      ]
    },
    {
      "type": "p",
      "text": "Then say it plainly on your pricing page, and test it like a customer would."
    },
    {
      "type": "h2",
      "text": "Launch price or coupon code?"
    },
    {
      "type": "p",
      "text": "A **launch price** means the price itself is lower until a set date. Everyone sees it and nobody types anything. A **coupon code** keeps your normal price and takes something off for people who enter a code at checkout or arrive through a special link."
    },
    {
      "type": "p",
      "text": "A code is better when you want a deal for one group without changing the price for everyone."
    },
    {
      "type": "p",
      "text": "Either way, decide what happens to people who already bought. If someone subscribed at the launch price, do they keep it when the price goes up? It's your call. Write it down so your agent doesn't guess and your pricing page can say it. If you're still choosing how to charge at all, start with [how to charge for your vibe-coded app](/blog/charge-for-your-vibe-coded-app)."
    },
    {
      "type": "p",
      "text": "**Be honest about the end date.** If the deal ends on a date, show that date and keep it. No countdown timer that resets every visit, no \"only 3 left\" unless that's literally true, no crossed-out price you never actually charged. As an example of the rule: ShipToPaid's own page says the launch price of $49 ends on 30 Nov 2026 and then it's $79. That's the whole message. No timer."
    },
    {
      "type": "h2",
      "text": "Subscriptions: how long does the discount last?"
    },
    {
      "type": "p",
      "text": "This is where most surprises come from. A customer uses a 50% off code, and months later their card is charged full price. If nobody told them, it feels like a trick."
    },
    {
      "type": "p",
      "text": "Both Polar and Stripe let a subscription discount run for three kinds of length: once, for a number of months, or forever. With made-up example numbers: a $10 a month plan with 50% off for 3 months charges $5, $5, $5, then $10 from month four onwards. Say it in plain words next to the price or code box: \"50% off your first 3 months, then $10/month.\""
    },
    {
      "type": "p",
      "text": "Watch out for yearly plans. Stripe's [coupons page](https://docs.stripe.com/billing/subscriptions/coupons) gives its own example: a 50% off coupon set for 4 months covers 4 invoices on a monthly plan, but the whole year on a yearly plan if it renews inside that window. Polar's [discounts page](https://polar.sh/docs/features/discounts) says \"once\" covers the first billing cycle, so after a switch from monthly to yearly it covers a yearly charge. If you also sell a yearly option, my guide to [yearly plans](/blog/yearly-plan-vibe-coded-app) covers showing that price honestly."
    },
    {
      "type": "h2",
      "text": "Limits that stop surprises"
    },
    {
      "type": "p",
      "text": "A code with no limits works forever, for anyone who finds it, and shared codes travel. Pick your limits up front:"
    },
    {
      "type": "ul",
      "items": [
        "**An end date.** After this, nobody new can use the code.",
        "**A maximum number of uses.** In total, across everyone.",
        "**One use per customer.** So one person can't use it again and again.",
        "**Which products.** So a code meant for your monthly plan doesn't also work on your lifetime deal.",
        "**New customers only.** So existing customers don't cancel and come back with the code."
      ]
    },
    {
      "type": "p",
      "text": "One thing that catches people out: an end date usually stops new people from using a code, not the discount itself. Stripe says it plainly: if a coupon lasts forever and has an expiration date, anyone who already has it keeps the discount forever."
    },
    {
      "type": "h2",
      "text": "What Polar offers (as of 4 Nov 2026)"
    },
    {
      "type": "p",
      "text": "From Polar's [discounts page](https://polar.sh/docs/features/discounts):"
    },
    {
      "type": "ul",
      "items": [
        "**Percentage or fixed amount**, on one-time products and on subscriptions.",
        "**How long, on subscriptions:** once, several months, or forever.",
        "**An optional code.** Codes aren't case sensitive. A discount without a code can only be applied through a checkout link or through Polar's API.",
        "**Restrictions:** specific products (by default a discount works on all products, including ones you create later), a start date, an end date (it can only be used before then), a maximum number of uses across all customers, and a maximum per customer.",
        "**Per-customer limits.** Polar recognises the same buyer by customer ID, email address (it ignores the \"+something\" part of an email) or payment card. Refunding an order frees that customer's slot, so they could use the code again. A partial refund doesn't.",
        "**Plan changes.** Once applied to a subscription, the discount stays on through plan changes."
      ]
    },
    {
      "type": "p",
      "text": "Polar's [checkout links page](https://polar.sh/docs/features/checkout/links) adds two options. You can preset a discount on a link, so it's applied automatically with nothing to type, handy for a link you share with one community. Or you can add the code to the link so the code box is filled in and visible."
    },
    {
      "type": "h2",
      "text": "What Stripe offers (as of 4 Nov 2026)"
    },
    {
      "type": "p",
      "text": "Stripe splits this into two parts, explained on its [coupons and promotion codes page](https://docs.stripe.com/billing/subscriptions/coupons):"
    },
    {
      "type": "ul",
      "items": [
        "**A coupon** is the discount itself: a percentage or fixed amount, how long it lasts on a subscription (once, a number of months, or forever), which products it applies to, a maximum number of uses, and the last date it can be applied. Once means the first invoice only. You decide who gets a coupon.",
        "**A promotion code** is the word a customer types. Several codes can point at one coupon. Codes can be limited to one customer, to first-time orders, to a minimum order amount, to an expiry date, and to a number of uses. Once a code hits its limit or expiry date, it stops for good and can't be switched back on."
      ]
    },
    {
      "type": "p",
      "text": "A few details worth knowing:"
    },
    {
      "type": "ul",
      "items": [
        "**First-time orders only** excludes anyone with earlier history with you; Stripe says even an unfinished payment or a cancelled trial counts.",
        "**A minimum order amount** only applies to the first payment of a subscription.",
        "**Deleting a coupon** stops new uses but doesn't remove the discount from anyone who already has it.",
        "**The code box on checkout.** Stripe's [checkout discounts page](https://docs.stripe.com/payments/checkout/discounts) says the box where customers type a code is turned on by a setting that allows promotion codes on that checkout, and a checkout supports one coupon or promotion code at a time. If your code box is missing, that setting is the first thing to check.",
        "**The customer portal.** If you turn on promotion codes in Stripe's portal, customers can apply a code when they change plans."
      ]
    },
    {
      "type": "h2",
      "text": "Access, refunds and tax with discounts"
    },
    {
      "type": "p",
      "text": "**Access shouldn't depend on the amount.** Your app should unlock the paid plan when the provider confirms the purchase (it sends your app a payment message, a webhook), whether the customer paid full price, half, or nothing with a 100% code. If someone with a free code can't get in, my guide on [why customers get locked out after paying](/blog/customer-paid-but-no-access) covers the usual causes."
    },
    {
      "type": "p",
      "text": "**Refunds return what they actually paid.** Stripe's [refunds page](https://docs.stripe.com/refunds) says you can't refund more than the original charge. Polar's [refunds page](https://polar.sh/docs/features/refunds) says the most you can refund is the order's amount before tax, minus anything already refunded, and the matching tax goes back with it. Check the order to see what was really paid before promising an amount. My guide to [refunds and cancellations](/blog/refunds-and-cancellations-ai-built-app) covers what should happen to access."
    },
    {
      "type": "p",
      "text": "**Tax follows the discounted price.** Stripe's [tax calculation page](https://docs.stripe.com/tax/calculating) says Stripe Tax works out tax after the discount is taken off, so tax is charged on what the customer actually pays. Polar handles tax as the merchant of record; the pages I read don't cover discounts and tax, so check their current docs. My guide to [sales tax and VAT](/blog/sales-tax-vat-vibe-coded-app) explains the bigger picture."
    },
    {
      "type": "p",
      "text": "Things to ask your agent:"
    },
    {
      "type": "ul",
      "items": [
        "\"Does our app unlock the paid plan from the provider's payment message, whatever amount was paid, including with a 100% code?\"",
        "\"Does our pricing page say exactly how long the discount lasts and what the price is after it ends?\"",
        "\"Is the code box turned on at our checkout, and is the code limited to the right products?\""
      ]
    },
    {
      "type": "h2",
      "text": "What to test (in test mode, never with a real card)"
    },
    {
      "type": "p",
      "text": "Use Polar's [sandbox](https://polar.sh/docs/integrate/sandbox) or Stripe's test mode. Don't test your live checkout with your own real card: Polar's [account reviews page](https://polar.sh/docs/merchant-of-record/account-reviews) says payment processors treat that as card testing, which can get the card or your account blocked."
    },
    {
      "type": "ol",
      "items": [
        "Apply the code at checkout. Check the total.",
        "Try an expired code and a used-up one. Check the customer sees a clear message.",
        "Try the code on a product it shouldn't work on.",
        "Use a \"first payment only\" or \"first 3 months\" code, then move time forward and check the renewal charges the full price you promised. On Stripe, [test clocks](https://docs.stripe.com/billing/testing/test-clocks) let you do this without waiting.",
        "Use a 100% code and check access unlocks exactly as it does for a paid order.",
        "Refund a discounted order. Check the amount and what happens to access."
      ]
    },
    {
      "type": "h2",
      "text": "Where ShipToPaid fits"
    },
    {
      "type": "p",
      "text": "I made [ShipToPaid](https://www.shiptopaid.com) so AI agents get payments right in apps like yours. To be clear about discounts: it doesn't build a coupon system or launch pricing for you. Its pricing copy skill tells your agent to use truthful comparisons and never invent crossed-out prices, urgency or \"Most popular\" badges, and its landing page skill says not to promise discounts that don't exist. The free [ShipToPaid Lite](https://github.com/shiptopaid/shiptopaid-lite) pack's launch check uses one discount code on purpose: a single-use 100% code, limited to your paid product, to check your live setup without your own card, deleted afterwards. You don't need any of it to follow this guide."
    }
  ]
};
