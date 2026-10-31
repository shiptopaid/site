import type { Post } from "@/lib/blog";

export const usageCreditsAiApp: Post = {
  "slug": "usage-credits-ai-app",
  "title": "How to Sell Usage Credits in Your AI App (Pay-as-You-Go Without Surprises)",
  "seoTitle": "How to Sell Usage Credits in Your AI App",
  "description": "Selling credits in your AI-built app? Packs vs monthly allowance, what happens at zero, refunds of unused credits, and what to test on Polar or Stripe.",
  "date": "2026-11-02",
  "author": "Deepak",
  "readingMinutes": 8,
  "body": [
    {
      "type": "p",
      "text": "Your app calls an AI model, and every time someone uses it, you pay a little. A flat monthly price works until one customer uses it a hundred times more than everyone else. Then you start wondering whether you should charge by use instead. Credits are the usual answer: the customer pays up front for a balance, and each use takes some of it away."
    },
    {
      "type": "p",
      "text": "I'm Deepak, a developer in Hyderabad. I build side projects with AI agents and spend a lot of my time wiring payments into apps made with Claude Code, Cursor and Codex. This guide covers the ways to charge by usage, the choices you have to make before your agent writes anything, what Polar and Stripe offer, and what to test. No code needed."
    },
    {
      "type": "p",
      "text": "Everything I say about Polar and Stripe comes from their own docs, as of 30 Oct 2026, linked so you can check again. Usage billing is one of the faster-changing parts of both, so re-read the docs before you rely on a detail."
    },
    {
      "type": "h2",
      "text": "The short answer"
    },
    {
      "type": "p",
      "text": "Pick a unit your customers understand, like \"1 credit = 1 image\". Decide what happens when someone runs out. Keep one clear record of each person's balance, and make sure two quick clicks can't spend the same credit twice. Add credits only when the payment provider confirms the payment, and only once per payment. Then test all of it in test mode before a real customer does."
    },
    {
      "type": "h2",
      "text": "Three ways to charge by usage"
    },
    {
      "type": "p",
      "text": "There are three common setups. They sound similar, but they feel very different to the customer."
    },
    {
      "type": "ul",
      "items": [
        "**Credit packs:** the customer buys a pack (say, 100 credits), uses them, and buys another when they run low. They never pay more than they chose to. The risk is on the other side: they can run out halfway through something and get annoyed.",
        "**A monthly allowance in a subscription:** the customer pays every month and gets a set number of credits each month. You have to decide whether unused credits carry over to the next month or reset. Often paired with packs for people who need extra.",
        "**Billing for usage afterwards:** the customer uses the app freely and gets a bill at the end of the month for what they used. This is closest to how cloud providers charge. Nobody runs out mid-task, but a customer can get a bill they didn't expect, which is a quick way to lose trust."
      ]
    },
    {
      "type": "p",
      "text": "For a small app, packs or a monthly allowance are usually easier to explain and harder to get wrong, because the customer has paid before they use anything. Billing afterwards makes more sense when your customers are businesses that expect it. I'm not going to pretend one of these sells better; it depends on your app and your customers."
    },
    {
      "type": "p",
      "text": "If you're still deciding between one-time, subscription and credits in general, my guide on [how to charge for your vibe-coded app](/blog/charge-for-your-vibe-coded-app) covers that first choice."
    },
    {
      "type": "h2",
      "text": "Pick a unit people understand"
    },
    {
      "type": "p",
      "text": "\"Tokens\" mean something to you. They mean very little to most customers. A unit tied to what the customer actually gets is easier: one credit per image, per document summarised, per minute of audio. If different actions cost you very different amounts, give them different prices in credits (\"a quick answer costs 1 credit, a long report costs 5\") and show that price before the person clicks."
    },
    {
      "type": "p",
      "text": "To set the price, work out what one use costs you: the AI model's charge for a typical request, plus anything else that use triggers, like storage. Your provider's pricing page and your own usage dashboard will tell you. Then add a margin that also covers the payment provider's fees and the uses that fail and get retried. I can't give you a number, because it depends entirely on your model and your app, so measure a few real uses rather than guessing."
    },
    {
      "type": "p",
      "text": "Keep credits as whole numbers. \"You have 37 credits left\" is clear; \"you have 3.72 credits\" invites questions, and fractions are where balance bugs like to hide."
    },
    {
      "type": "h2",
      "text": "What happens at zero"
    },
    {
      "type": "p",
      "text": "Decide this before you build, because your agent will pick something if you don't."
    },
    {
      "type": "ul",
      "items": [
        "**Stop with a friendly screen.** When the balance is too low for the next action, say so plainly and offer a top-up button. Don't start the work and then fail halfway.",
        "**Warn before zero.** Show the balance somewhere visible and warn when it gets low, so running out is never a surprise.",
        "**Decide on going below zero.** Some apps allow a small overdraft so a task in progress can finish. That's fine if you decide it on purpose. What you don't want is a balance that goes negative by accident because someone clicked twice quickly, or opened two tabs."
      ]
    },
    {
      "type": "h2",
      "text": "What Polar and Stripe offer (as of 30 Oct 2026)"
    },
    {
      "type": "p",
      "text": "**On Polar,** [usage-based billing](https://polar.sh/docs/features/usage-based-billing/introduction) works like this: your app sends Polar a small message each time a customer uses something (Polar calls these events), and a [meter](https://polar.sh/docs/features/usage-based-billing/meters) counts or adds them up per customer. Polar labels usage-based billing a new feature."
    },
    {
      "type": "ul",
      "items": [
        "**Credits:** the [credits page](https://polar.sh/docs/features/usage-based-billing/credits) says you attach a credits benefit to a product. On a one-time product, the credits are added once when the customer buys. On a subscription, they're added at the start of every billing period, and none are added while the subscription is \"past due\" (a renewal payment failed).",
        "**Credits only, or credits plus a bill:** if the product also has a metered price, usage beyond the credits is charged as overage. If you want credits only, the page says not to add a metered price, so nothing extra is ever billed.",
        "**Adding credits by hand:** you can add credits to a customer from the dashboard, for example as a goodwill gesture, and choose whether unused ones carry over to the next period. Credits added by mistake can be reversed within 7 days, but only the unused part.",
        "**What the customer sees:** the customer portal shows their estimated charges for each meter.",
        "**The important warning:** Polar's page says it doesn't block usage when a customer goes past their balance. Your app has to do that itself."
      ]
    },
    {
      "type": "p",
      "text": "**On Stripe,** the [usage-based billing page](https://docs.stripe.com/billing/subscriptions/usage-based) now says Metronome is part of Stripe and is the recommended starting point for new usage-based setups, including prepaid credits. The older \"basic\" usage billing, built on meters, is still fully supported and, according to the same page, works more fully with Stripe Checkout. If your agent suggests one or the other, this is why; ask it which one it's using and why."
    },
    {
      "type": "ul",
      "items": [
        "**Billing credits:** in the basic setup, Stripe's [billing credits page](https://docs.stripe.com/billing/subscriptions/usage-based/billing-credits) describes credit grants as an amount of money off a customer's future usage bills. They only apply to subscriptions that bill by metered usage, and they're used when the bill is finalised, not the moment someone uses your app.",
        "**Expiry:** credits don't expire unless you set an expiry date on the grant.",
        "**Rules:** Stripe says billing credits can't be sold as gift cards or as stored money to spend elsewhere. They're for your own product only.",
        "**Refunds:** the same page says issuing a credit note doesn't give the credits back; you'd have to grant new ones."
      ]
    },
    {
      "type": "p",
      "text": "So on Stripe, \"1 credit = 1 image\" packs aren't something you switch on. Many small apps keep that balance in their own database and use Stripe Checkout only to sell the packs. That's a perfectly normal setup; it just means your app owns the balance."
    },
    {
      "type": "h2",
      "text": "What your app has to do"
    },
    {
      "type": "p",
      "text": "Whichever provider you use, these are the parts your agent has to get right. Each comes with something you can ask it."
    },
    {
      "type": "ul",
      "items": [
        "**One record of the balance.** Either your own database holds the balance, or the payment provider does. Never both by accident, or they'll drift apart. Ask your agent: \"Where is each user's credit balance stored, and is that the only place we check before letting them use a credit?\"",
        "**Spending in one safe step.** Checking the balance and taking the credit away must happen together, so two quick clicks or two open tabs can't both spend the last credit. Ask your agent: \"If a user with 1 credit clicks twice at the same moment, what stops both clicks from going through?\"",
        "**Add credits only when payment is confirmed.** The success page after checkout isn't proof of payment. Polar and Stripe send your app a payment message (a webhook) when a payment really goes through, and that's when credits should be added. Ask your agent: \"Are credits added from the verified payment message, and not from the success page?\"",
        "**Only once per payment.** Payment messages can arrive twice. Adding the same pack twice is free credits; missing it is a customer who paid for nothing. Ask your agent: \"If the same payment message arrives twice, are credits still added only once?\"",
        "**Failed work gives credits back.** If the AI call fails after you took the credit, give it back, once. Ask your agent: \"If the AI request fails, does the user get the credit back, and only one time?\"",
        "**A refund rule.** Decide what refunding a pack means when some credits are already used: refund only the unused part, or take the credits away and refund in full. Write it on your refund policy. My guide to [refunds and cancellations](/blog/refunds-and-cancellations-ai-built-app) covers the access side."
      ]
    },
    {
      "type": "h2",
      "text": "What to test (in test mode, never with a real card)"
    },
    {
      "type": "p",
      "text": "Use Polar's sandbox or Stripe's test mode with their [test cards](https://docs.stripe.com/testing). Go through this list as a customer would:"
    },
    {
      "type": "ol",
      "items": [
        "Buy a pack. Check the balance goes up by exactly the right amount.",
        "Use the app. Check the balance goes down by the right amount for each action.",
        "With 1 credit left, click the action button twice as fast as you can (and try it from two tabs). Only one should go through.",
        "Run the balance to zero. You should see your friendly \"out of credits\" screen, not an error.",
        "Top up and check you can carry on.",
        "Get the same payment message delivered twice. Your agent can show you how to resend one in test mode (Stripe's dashboard lets you resend events). The balance shouldn't change.",
        "Make an AI request fail on purpose and check the credit comes back once.",
        "Refund a pack and check your refund rule happens.",
        "If you have a monthly allowance, move time forward to the renewal and check the allowance resets or carries over the way you decided. On Stripe, [test clocks](https://docs.stripe.com/billing/testing/test-clocks) do this."
      ]
    },
    {
      "type": "p",
      "text": "If you want customers to try the app before buying, a few free starter credits work like a small trial; my guide to [adding a free trial](/blog/free-trial-vibe-coded-app) covers the trade-offs. And if someone ever says they paid but got no credits, my guide on [why customers get locked out after paying](/blog/customer-paid-but-no-access) walks through the usual causes."
    },
    {
      "type": "h2",
      "text": "Where ShipToPaid fits"
    },
    {
      "type": "p",
      "text": "I made [ShipToPaid](https://www.shiptopaid.com) so AI agents get payments right in apps like yours. The full pack has a usage credits skill and an add-credits command that guide your agent through a credit balance in your own database and/or Polar usage billing, with credits added only from verified payment messages and spending done in one safe step. To be clear about its limits: the starter app itself sells subscriptions, not credits, and the skill says its Polar usage-billing examples are checked against Polar's code library but haven't been tested with live usage billing. You don't need any of it to follow this guide."
    }
  ]
};
