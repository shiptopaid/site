import type { Post } from "@/lib/blog";

export const refundsAndCancellationsAiBuiltApp: Post = {
  "slug": "refunds-and-cancellations-ai-built-app",
  "title": "How to Handle Refunds and Cancellations in an AI-Built App",
  "seoTitle": "Refunds and Cancellations in an AI-Built App",
  "description": "What should happen to access when a customer gets a refund, cancels, or a renewal fails? A plain-English guide for AI-built apps, plus what to test.",
  "date": "2026-10-26",
  "author": "Deepak",
  "readingMinutes": 7,
  "body": [
    {
      "type": "p",
      "text": "Your first sale feels like the finish line. It isn't. Sooner or later someone asks for a refund, someone cancels, and someone's card stops working. Each should change what that person can open in your app, and that's the part AI agents tend to skip."
    },
    {
      "type": "p",
      "text": "I'm Deepak, a developer in Hyderabad. I build side projects with AI agents and spend a lot of my time wiring payments into apps made with Claude Code, Cursor and Codex. This guide covers what should happen to access in each moment, how Polar and Stripe behave, and what to test. No code needed."
    },
    {
      "type": "p",
      "text": "Everything I say about Polar and Stripe comes from their own docs, as of 23 Oct 2026, linked so you can check again. These things change, so re-read the docs before you rely on a detail."
    },
    {
      "type": "h2",
      "text": "Write your rules down first"
    },
    {
      "type": "p",
      "text": "Your agent can only build the right thing if you tell it what \"right\" is. A sensible starting point for a small app:"
    },
    {
      "type": "ul",
      "items": [
        "**One-time purchase, refunded:** access ends.",
        "**Subscription, cancelled by the customer:** access lasts until the end of the period they already paid for, then ends.",
        "**Subscription, refunded:** decide up front. Most makers also cancel straight away, so access ends now.",
        "**Renewal payment failed:** a short grace period with a friendly \"please update your card\" banner, then access ends if nobody fixes it.",
        "**Chargeback** (the customer asks their bank to reverse the payment): access ends."
      ]
    },
    {
      "type": "p",
      "text": "Your rules can differ. What matters is that you choose, write it down, and test it. Put the short version on your refund page too, so customers know what to expect."
    },
    {
      "type": "p",
      "text": "Keep \"who has access, and until when\" in your own database, and let payment messages update it. A payment message is an automatic note Polar or Stripe sends your app when something happens (developers call these webhooks). Your paid pages should read your database, never guess."
    },
    {
      "type": "h2",
      "text": "Refunds: getting the money back is not the same as losing access"
    },
    {
      "type": "p",
      "text": "A refund moves money. It doesn't always change what your customer can open."
    },
    {
      "type": "p",
      "text": "**On Polar,** as of 23 Oct 2026, the [refunds page](https://polar.sh/docs/features/refunds) says that for one-time purchases you can revoke the customer's benefits (like file downloads or license keys) when you refund, and that option is ticked by default. For subscriptions it's different: refunding an order returns the money but doesn't end the subscription. To end access, you cancel the subscription as well."
    },
    {
      "type": "p",
      "text": "The same page says Polar may refund an order itself within 60 days of purchase to head off a chargeback, even if you have a \"no refunds\" policy, and when it does, it cancels any related subscription and revokes benefits at the same time. So a refund can happen without you clicking anything, and your app has to listen for it."
    },
    {
      "type": "p",
      "text": "**On Stripe,** as of 23 Oct 2026, you can issue full or partial refunds from the dashboard ([Stripe's refunds docs](https://docs.stripe.com/refunds)). Cancelling a subscription is a separate step: when you cancel one in the dashboard, Stripe asks whether to refund nothing, a prorated amount (the unused part of the period), or the last payment in full ([cancel subscriptions](https://docs.stripe.com/billing/subscriptions/cancel)). So refunding a payment on its own doesn't tell your app to lock anyone out."
    },
    {
      "type": "p",
      "text": "On both, the original payment fees aren't returned when you refund, so a refund costs you a little more than the sale price you give back."
    },
    {
      "type": "p",
      "text": "**What to ask your agent:** \"When a refund payment message arrives, apply my rule: for one-time purchases, remove access. For subscriptions, check whether the subscription was also cancelled and follow that. Show me which messages you listen for.\""
    },
    {
      "type": "h2",
      "text": "Cancellations: \"cancelled\" doesn't mean \"gone today\""
    },
    {
      "type": "p",
      "text": "Someone who cancels a monthly plan on day 10 has still paid for the rest of the month. The fair default, which both companies support, is to keep access until the period ends."
    },
    {
      "type": "p",
      "text": "**On Polar,** as of 23 Oct 2026, a customer who cancels from the [customer portal](https://polar.sh/docs/features/customer-portal/introduction) gets \"cancel at period end\": the subscription stays active and keeps its benefits until the end date, and it can be uncancelled before then ([managing subscriptions](https://polar.sh/docs/features/subscriptions/manage)). The detail that trips up AI-written code: according to Polar's [webhook events page](https://polar.sh/docs/integrate/webhooks/events), the \"canceled\" message is sent immediately, while the subscription is still active. A second \"revoked\" message comes when the period actually ends. If your app locks people out on the first message, you've just taken away time they paid for."
    },
    {
      "type": "p",
      "text": "**On Stripe,** as of 23 Oct 2026, a cancel through the API takes effect immediately by default; in the dashboard you choose immediately, at the end of the period, or a custom day. A cancel at period end can be reactivated any time before then ([cancel subscriptions](https://docs.stripe.com/billing/subscriptions/cancel)). Stripe's customer portal lets customers cancel by themselves, and that option is on by default ([cancellation page](https://docs.stripe.com/customer-management/cancellation-page))."
    },
    {
      "type": "p",
      "text": "Watch for three bugs: access ends the moment someone clicks cancel; access never ends at all; or the customer uncancels and your app doesn't notice, so a paying customer stays locked out (more on that in [why customers get locked out after paying](/blog/customer-paid-but-no-access))."
    },
    {
      "type": "p",
      "text": "**What to ask your agent:** \"When a customer cancels, keep their access until the end of the period they paid for, then remove it. If they uncancel before then, keep access. Base it on the end date the payment company sends, not on the cancel click.\""
    },
    {
      "type": "h2",
      "text": "Failed renewals: be kind, but don't be a free plan"
    },
    {
      "type": "p",
      "text": "Cards expire and banks decline. A failed renewal usually isn't a customer trying to leave, so don't lock them out the second it happens."
    },
    {
      "type": "p",
      "text": "**On Polar,** as of 23 Oct 2026, a failed renewal moves the subscription to \"past due\", Polar emails the customer a link to update their card, and it retries 2, 7, 14 and 21 days after the first failure. If every retry fails, it revokes the subscription ([recovering failed payments](https://polar.sh/docs/features/subscriptions/failed-payments)). By default, benefits are revoked as soon as the subscription stops being active, but there's a setting to keep them for 2, 7, 14 or 21 days while it's past due."
    },
    {
      "type": "p",
      "text": "**On Stripe,** as of 23 Oct 2026, [Smart Retries](https://docs.stripe.com/billing/revenue-recovery/smart-retries) picks the retry times, and the recommended default is 8 tries within 2 weeks. After the last retry, your dashboard settings decide whether the subscription becomes cancelled, \"unpaid\", or stays past due. Stripe's [subscription statuses](https://docs.stripe.com/billing/subscriptions/overview) say to revoke access once a subscription is unpaid."
    },
    {
      "type": "p",
      "text": "**A note for makers in India:** the same Smart Retries page says Stripe doesn't retry payments on India-issued cards. So with Indian customers on Stripe, a failed renewal may not get a second try, and a clear \"update your card\" banner matters even more."
    },
    {
      "type": "p",
      "text": "Whichever you use, pick a grace period, show a banner linking to your billing page while the customer is past due, and make sure access comes back by itself once the payment goes through."
    },
    {
      "type": "p",
      "text": "**What to ask your agent:** \"When a renewal fails, keep access for my grace period and show a banner linking to the billing page. If payment succeeds, remove the banner. If the subscription ends after the retries, remove access.\""
    },
    {
      "type": "h2",
      "text": "Chargebacks, briefly"
    },
    {
      "type": "p",
      "text": "As of 23 Oct 2026, Stripe's [cancel subscriptions page](https://docs.stripe.com/billing/subscriptions/cancel) says a disputed subscription keeps renewing unless you change a setting to cancel it automatically. Worth switching on, so a disputed customer isn't charged again. On Polar, the automatic early refunds mentioned above are meant to head off chargebacks on lower-value sales before they're filed."
    },
    {
      "type": "h2",
      "text": "What to test (in test mode, about 20 minutes)"
    },
    {
      "type": "p",
      "text": "Use test mode, where test cards move no real money (Polar and Stripe both ask you not to test with real card details). For each line, check what your app shows, not just the dashboard:"
    },
    {
      "type": "ol",
      "items": [
        "Buy a one-time product, refund it in the dashboard. Access should follow your rule.",
        "Subscribe, then cancel from the customer billing page. Access should stay until the period ends.",
        "Uncancel before the end. Access should stay, with no lockout.",
        "Let the cancelled period run out. Access should end. (On Stripe, [test clocks](https://docs.stripe.com/billing/testing/test-clocks) let you fast-forward time. On Polar, revoking the subscription in the dashboard shows you the end state.)",
        "Refund a subscription payment without cancelling. Does your app do what you wrote down?",
        "Make a renewal fail (on Stripe, a test clock plus one of the declining [test cards](https://docs.stripe.com/testing) does it). You should see the banner, keep access during the grace period, and lose it afterwards.",
        "Fix the card. Access should come back without you touching the account.",
        "Log out and back in after each step, to rule out old login info."
      ]
    },
    {
      "type": "p",
      "text": "If you haven't run the basics yet, start with the pre-launch checklist in my guide on [how to add payments to an app you built with AI](/blog/add-payments-to-ai-built-app). If you're still choosing between one-time and subscriptions, see [how to charge for your vibe-coded app](/blog/charge-for-your-vibe-coded-app); one-time sales skip most of this. And if you haven't picked a provider yet, here's my [Polar vs Stripe comparison for indie makers](/blog/polar-vs-stripe-for-indie-makers)."
    },
    {
      "type": "h2",
      "text": "Where ShipToPaid fits"
    },
    {
      "type": "p",
      "text": "I made [ShipToPaid](https://www.shiptopaid.com) so AI agents handle these moments without reminders. Its paywall skill covers cancellations and failed payments, and its launch audit walks you through tests like these. The [free lite pack](https://github.com/shiptopaid/shiptopaid-lite) has the Polar basics. The full pack adds Stripe, subscriptions that control access and a customer billing page. You don't need either to use this guide."
    }
  ]
};
