import type { Post } from "@/lib/blog";

export const chargebacksDisputesVibeCodedApp: Post = {
  "slug": "chargebacks-disputes-vibe-coded-app",
  "title": "Chargebacks and Disputes in a Vibe-Coded App: What Happens and How to Avoid Them",
  "seoTitle": "Chargebacks and Disputes in Your AI-Built App",
  "description": "A customer disputed a payment in your AI-built app? What a chargeback is, who handles it on Polar vs Stripe, what evidence helps, and how to prevent them.",
  "date": "2026-11-16",
  "author": "Deepak",
  "readingMinutes": 8,
  "body": [
    {
      "type": "p",
      "text": "A customer emails you: \"I don't recognise this charge.\" Or worse, you open your payment dashboard and see a dispute. The money is already gone while someone else decides. For a small vibe-coded app, that moment feels bigger than it should."
    },
    {
      "type": "p",
      "text": "I'm Deepak, a developer in Hyderabad. I build side projects with AI agents and spend a lot of my time wiring payments into apps made with Claude Code, Cursor and Codex. This guide covers what a dispute (chargeback) is, what Polar and Stripe do, what your app should do, and how to make them less likely. No code needed."
    },
    {
      "type": "p",
      "text": "Everything I say about Polar and Stripe comes from their own docs, as of 6 Nov 2026, linked so you can check again. Re-read them before you rely on a detail. This is not legal or financial advice — if a dispute puts real money or your account at risk, check the provider's current docs and get advice for your own situation."
    },
    {
      "type": "h2",
      "text": "The short answer"
    },
    {
      "type": "p",
      "text": "A **dispute** (also called a **chargeback**) is when a customer asks their bank to reverse a payment instead of asking you for a refund. The bank pulls the money while the case is decided. There is usually a fee. Too many disputes can put your account under review."
    },
    {
      "type": "p",
      "text": "Prevention beats fighting: a charge name people recognise on their bank statement, an easy way to cancel and get a refund, clear receipts, and a refund page that says what you actually do. Most of the pain I see starts as \"I don't know who charged me\" or \"I couldn't cancel.\""
    },
    {
      "type": "h2",
      "text": "Dispute vs refund"
    },
    {
      "type": "p",
      "text": "A **refund** is you (or your payment company) giving the money back. You stay in control. A **dispute** is the customer's bank forcing the money back through the card network. You lose that control for a while, and you usually pay a fee either way."
    },
    {
      "type": "p",
      "text": "On Polar, as of 6 Nov 2026, the [fees page](https://polar.sh/docs/merchant-of-record/fees) says disputes cost **$15 per dispute**, deducted from your balance, **regardless of the outcome**, and that fee comes from the card networks and processors so Polar cannot refund it. The same page notes Polar may refund within 60 days to cut disputes that would otherwise cost you that $15."
    },
    {
      "type": "p",
      "text": "On Stripe, as of 6 Nov 2026, the [how disputes work](https://docs.stripe.com/disputes/how-disputes-work) page says when a dispute starts, Stripe debits the disputed amount **plus a dispute fee** from your balance. Stripe's [US pricing page](https://stripe.com/pricing) lists a **dispute received fee of $15** for each dispute you receive, and a **dispute countered fee of $15** if you respond manually (you get the countered fee back if you win; the received fee is not returned unless your contract or country rules say otherwise). Fees and country rules change — check the pricing page for yours."
    },
    {
      "type": "p",
      "text": "Refunds still cost you the original processing fee in both places (the networks keep it). But a refund usually avoids the dispute fee and the hit to your dispute rate. If someone asks nicely and you can refund, that is often the cheaper path. My guide to [refunds and cancellations](/blog/refunds-and-cancellations-ai-built-app) covers what should happen to access when money goes back."
    },
    {
      "type": "h2",
      "text": "Why people dispute (in plain words)"
    },
    {
      "type": "p",
      "text": "Card networks and Stripe group disputes by reason. You do not need the codes. In plain words, the common ones for a small SaaS look like this:"
    },
    {
      "type": "ul",
      "items": [
        "**Didn't recognise the charge.** The bank statement showed a name they didn't connect to your app.",
        "**Forgot a renewal.** A subscription charged again and they thought they'd cancelled, or never meant to keep it.",
        "**Couldn't cancel or get a refund.** They tried, couldn't find the button or the email, and went to the bank instead.",
        "**Product not as described.** What they got didn't match the pricing page or the demo.",
        "**Real fraud.** Someone else used their card."
      ]
    },
    {
      "type": "p",
      "text": "I am not inventing rates for how often each happens. Stripe's [dispute prevention tips](https://docs.stripe.com/disputes/prevention/best-practices) put the same ideas first: clear contact, clear refund and cancellation policies, and a recognisable statement name."
    },
    {
      "type": "p",
      "text": "If your launch deal or coupon left someone surprised by a later full-price renewal, fix the wording before the bank gets involved — my guide to [launch discounts and coupon codes](/blog/launch-discount-coupon-codes) covers saying how long a discount lasts."
    },
    {
      "type": "h2",
      "text": "What Polar does (as of 6 Nov 2026)"
    },
    {
      "type": "p",
      "text": "Polar is a **merchant of record**: on paper, Polar is the seller for your digital product. [Polar's MoR intro](https://polar.sh/docs/merchant-of-record/introduction) explains that role. That also means Polar handles a lot of the chargeback process as the seller."
    },
    {
      "type": "p",
      "text": "From Polar's [refunds page](https://polar.sh/docs/features/refunds) and [account reviews page](https://polar.sh/docs/merchant-of-record/account-reviews):"
    },
    {
      "type": "ul",
      "items": [
        "Polar may refund within **60 days** of purchase, at its own discretion, to prevent chargebacks — even if you publish a \"no refunds\" policy.",
        "It receives **early chargeback signals** before a formal dispute. For lower-value orders it can **automatically refund**, **cancel** any related subscription, and **revoke** benefits, then email you.",
        "Customers can file chargebacks up to **120 days** after a transaction.",
        "Polar holds accounts to a **0.4%** chargeback rate (it says card networks treat about **0.7%+** as excessive). If your rate climbs, Polar says it reaches out first; then it may refund individual sales, hold payouts until the 120-day window closes, pause future payments, or block the account and refund customers.",
        "When Polar loops you into a support thread, it expects a reply within **48 hours**."
      ]
    },
    {
      "type": "p",
      "text": "So on Polar your job is less \"submit evidence to Visa\" and more: keep chargebacks rare, answer when Polar asks, and make sure your app reacts when a refund or cancellation payment message arrives. If you're still choosing a provider, my [Polar vs Stripe](/blog/polar-vs-stripe-for-indie-makers) guide covers the merchant-of-record trade-off."
    },
    {
      "type": "h2",
      "text": "What Stripe does (as of 6 Nov 2026)"
    },
    {
      "type": "p",
      "text": "On Stripe's standard setup **you** are the seller, so you respond to disputes yourself (unless you use a product that says otherwise). From Stripe's [disputes overview](https://docs.stripe.com/disputes), [how disputes work](https://docs.stripe.com/disputes/how-disputes-work) and [responding](https://docs.stripe.com/disputes/responding) pages:"
    },
    {
      "type": "ul",
      "items": [
        "When a dispute opens, the network pulls the money and Stripe debits your balance for the amount plus the dispute fee.",
        "You usually have about **7 to 21 days** to respond, depending on the card network. Miss the deadline and you lose automatically.",
        "You get **one** chance to submit evidence. Stripe forwards it; you cannot edit it afterwards.",
        "The full process can take **2 to 3 months**. Outcomes are `won` or `lost`.",
        "Some networks start with an **inquiry** (a question before a full chargeback). Answering or refunding there can avoid a formal dispute fee.",
        "**Early fraud warnings** flag payments issuers suspect are fraud. You are not required to act; refunding can prevent a later fraud dispute. Stripe's page warns against refunding every warning blindly."
      ]
    },
    {
      "type": "p",
      "text": "**Statement descriptor.** Stripe's [statement descriptors page](https://docs.stripe.com/get-started/account/statement-descriptors) says a clear name on the bank statement reduces chargebacks. The full descriptor is **5 to 22 characters**, must include a letter, and should match how customers know your business (often your site or product name). For cards you can use a short prefix plus a per-charge suffix."
    },
    {
      "type": "p",
      "text": "**Subscriptions.** Stripe's [cancel subscriptions page](https://docs.stripe.com/billing/subscriptions/cancel) has a setting under disputed payments: cancel the subscription immediately, or at period end, so a disputed customer is not charged again while you fight the case. Worth turning on."
    },
    {
      "type": "h2",
      "text": "What your app should do"
    },
    {
      "type": "p",
      "text": "Decide the access rule before the first dispute. A common choice: when a dispute opens (or is lost), paid access ends. Write it down and put the short version on your refund page. Article 5 covers refunds, cancellations and a short chargeback note; this article is the deeper pass."
    },
    {
      "type": "p",
      "text": "A payment company sends your app a **payment message** when something happens (developers call these **webhooks**). Your app should update \"who has access\" from those messages, not from a thank-you page. If access is wrong after a sale, start with [why customers paid but can't get in](/blog/customer-paid-but-no-access)."
    },
    {
      "type": "p",
      "text": "Keep records that help if you ever need evidence: order receipts, emails about the purchase, that they accepted your terms, cancellation page visits, usage that shows they used the product, and support threads. Stripe's evidence form asks for this kind of thing; Polar may ask you for context when it loops you in."
    },
    {
      "type": "p",
      "text": "Make the charge name recognisable. Make cancel and refund obvious. Send clear receipts. If you run renewals, say the amount and date in plain words before the charge where your provider supports reminders."
    },
    {
      "type": "p",
      "text": "Things to ask your agent:"
    },
    {
      "type": "ul",
      "items": [
        "\"When a dispute or chargeback-related payment message arrives, apply my access rule and show me which messages you listen for.\"",
        "\"Does our refund page and customer billing page make cancel and refund obvious, with the policy we actually follow?\"",
        "\"What name appears on a customer's bank statement, and can we make it match our product name within the character limits?\"",
        "\"On Stripe, is the setting on that cancels a subscription after a dispute so we don't charge them again?\""
      ]
    },
    {
      "type": "h2",
      "text": "What to test (test mode / sandbox only)"
    },
    {
      "type": "p",
      "text": "Never use a real card on a live checkout to \"see what happens.\" Polar's [account reviews page](https://polar.sh/docs/merchant-of-record/account-reviews) says processors treat that as card testing and can block the card or the account. Use Polar's [sandbox](https://polar.sh/docs/integrate/sandbox) or Stripe test mode."
    },
    {
      "type": "p",
      "text": "**On Stripe,** the [testing page](https://docs.stripe.com/testing#disputes) documents test cards that create disputes and early fraud warnings after a successful test payment — for example an asynchronous fraudulent dispute card, a product-not-received dispute card, an inquiry card, and an early fraud warning card. Use those in test mode, then check: your app got the payment message, access followed your rule, and (if you challenge) submitting the documented winning or losing evidence text closes the case as expected."
    },
    {
      "type": "p",
      "text": "**On Polar,** the sandbox page documents test payments with Stripe test cards and webhook testing. As of 6 Nov 2026 I did not find a Polar page that lists dedicated \"create a chargeback in sandbox\" cards the way Stripe does. Test refunds, cancellations and the payment messages your app listens for in sandbox; treat live chargebacks as something Polar manages per its account reviews and refunds pages."
    },
    {
      "type": "h2",
      "text": "Where ShipToPaid fits"
    },
    {
      "type": "p",
      "text": "I made [ShipToPaid](https://www.shiptopaid.com) so AI agents get payments right in apps like yours. To be clear about disputes: it does not run chargeback evidence for you or replace Polar's or Stripe's dispute tools. Its webhook skills teach your agent to update access from signed payment messages; its pricing-copy skill separates cancel from refund and wants a real refund-policy link; the starter ships terms and a refund policy page; and the launch check asks for terms, privacy and refund pages linked from the footer. The free [ShipToPaid Lite](https://github.com/shiptopaid/shiptopaid-lite) pack covers the Polar webhook basics. You don't need any of it to follow this guide. ShipToPaid's own launch price is $49 until 30 Nov 2026, then $79 — said plainly, no timer."
    }
  ]
};
