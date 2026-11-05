import type { Post } from "@/lib/blog";

export const yearlyPlanVibeCodedApp: Post = {
  "slug": "yearly-plan-vibe-coded-app",
  "title": "How to Offer a Yearly Plan in Your Vibe-Coded App (Annual Pricing Without Headaches)",
  "seoTitle": "How to Add a Yearly Plan to Your Vibe-Coded App",
  "description": "Adding a yearly plan to your AI-built app? How to price and show the discount honestly, switching between monthly and yearly, refunds, and what to test.",
  "date": "2026-11-05",
  "author": "Deepak",
  "readingMinutes": 7,
  "body": [
    {
      "type": "p",
      "text": "Your app has a monthly plan and a few people pay for it. Then someone asks: \"Can I just pay for the whole year?\" It sounds small: a second price and a toggle on the pricing page. Then the first customer switches from monthly to yearly halfway through a month, and you find out how many decisions were hiding in that toggle."
    },
    {
      "type": "p",
      "text": "I'm Deepak, a developer in Hyderabad. I build side projects with AI agents and spend a lot of my time wiring payments into apps made with Claude Code, Cursor and Codex. This guide is for adding a yearly option to a monthly subscription you already sell. No code needed."
    },
    {
      "type": "p",
      "text": "Everything I say about Polar and Stripe comes from their own docs, as of 1 Nov 2026, linked so you can check again. Re-read them before you rely on a detail."
    },
    {
      "type": "h2",
      "text": "The short answer"
    },
    {
      "type": "p",
      "text": "Give yearly customers exactly the same access as monthly ones. Show the yearly price, what it works out to per month, and say plainly it's charged once a year. Decide how switching and refunds work before your agent builds anything. Then test it all in test mode, including a renewal a year later."
    },
    {
      "type": "h2",
      "text": "Why a yearly plan, and where it goes wrong"
    },
    {
      "type": "p",
      "text": "Some customers prefer paying once a year, and you get the money up front. The cost is that your app now has two prices for the same plan, and most yearly-plan bugs live between them: a yearly customer treated as a free user, someone charged twice when they switch, or someone who cancels and loses access the same day."
    },
    {
      "type": "p",
      "text": "If you haven't settled on a subscription in the first place, my guide on [how to charge for your vibe-coded app](/blog/charge-for-your-vibe-coded-app) covers that choice first."
    },
    {
      "type": "h2",
      "text": "Pricing it honestly"
    },
    {
      "type": "p",
      "text": "The discount is your choice. I won't give you a \"best practice\" percentage, because I have no real numbers showing one works better. Here's how to show it so nobody feels tricked."
    },
    {
      "type": "ul",
      "items": [
        "**Show the real yearly charge.** If you show a per-month figure, put the full amount next to it. With made-up example numbers, that looks like \"$100 a year, about $8.33 a month\". Never show only the smaller figure; the customer pays the full amount on day one.",
        "**Say how often it's billed.** \"Billed once a year, renews automatically\", near the button.",
        "**Compare against your real monthly price.** Twelve months of what you actually charge, not an invented crossed-out \"was\" price.",
        "**If the price will change, say when.** A launch price gets an end date, not a fake countdown timer."
      ]
    },
    {
      "type": "h2",
      "text": "Same plan, two prices"
    },
    {
      "type": "p",
      "text": "In both Polar and Stripe, a yearly option is a second price for the same plan (on Polar, a second product). So a paying customer can now be on one of two prices, and the check that lets people in has to ask \"does this person have an active paid plan?\", not \"are they on the monthly price?\". If your agent wrote that check when you only had a monthly plan, it may look for that one price, and every yearly customer gets locked out. Ask your agent: \"Does every paid-access check treat the monthly and yearly prices of the same plan as the same plan?\""
    },
    {
      "type": "p",
      "text": "Access should still come from the provider's confirmation, not the success page. Polar and Stripe send your app a payment message (a webhook) when a payment or plan change really goes through, and that's what your app should trust. If a yearly customer says they paid but can't get in, my guide on [why customers get locked out after paying](/blog/customer-paid-but-no-access) covers the usual causes."
    },
    {
      "type": "h2",
      "text": "Switching between monthly and yearly"
    },
    {
      "type": "p",
      "text": "Decide this on purpose, because your agent will pick something if you don't. Customers generally expect monthly to yearly to happen now, since they're paying more, and yearly to monthly to happen when the paid year ends."
    },
    {
      "type": "p",
      "text": "When someone switches partway through, there's the time they've already paid for. Proration is the provider working that out: it credits the unused part of the old plan and charges for the rest of the period on the new one. You can usually choose whether that happens, and whether the difference is charged now or later."
    },
    {
      "type": "p",
      "text": "There are two ways to let customers switch:"
    },
    {
      "type": "ul",
      "items": [
        "**The provider's customer portal.** Both Polar and Stripe host a page where customers manage their subscription, and both can allow plan switching if you turn it on. Ask your agent: \"Is plan switching on in our customer portal, and what happens to the charge and billing date when someone switches?\"",
        "**Your own page.** More control, more to test. Ask your agent: \"When a customer switches on our page, do we change their existing subscription, or could we create a second one?\""
      ]
    },
    {
      "type": "p",
      "text": "That second subscription is the one to watch. A \"switch to yearly\" button that just sends people through a new checkout can leave them paying for both."
    },
    {
      "type": "h2",
      "text": "What Polar and Stripe offer (as of 1 Nov 2026)"
    },
    {
      "type": "p",
      "text": "**On Polar,** monthly and yearly are [two separate products](https://polar.sh/docs/features/products), shown side by side at checkout. A product's billing interval can't be changed after it's created; the page suggests duplicating your monthly product to make the yearly one. Changing a price only affects new purchases."
    },
    {
      "type": "ul",
      "items": [
        "**Switching:** the [managing subscriptions page](https://polar.sh/docs/features/subscriptions/manage) says you can move a subscription to another product in the same currency, but not while it's cancelled or scheduled to cancel.",
        "**The difference:** the [proration page](https://polar.sh/docs/features/subscriptions/proration) lists the choices: charge or credit it now, add it to the next bill, or apply the change at the next billing period with no charge or credit. When the interval changes, like monthly to yearly, \"next bill\" becomes \"charge now\" automatically, and if that payment fails, the change doesn't happen. A fourth option that restarts the billing cycle is labelled preview.",
        "**Portal:** the [customer portal](https://polar.sh/docs/features/customer-portal/introduction) always lets customers cancel and update their card. Plan switching is a toggle in [portal settings](https://polar.sh/docs/features/customer-portal/settings), and follows your default proration choice."
      ]
    },
    {
      "type": "p",
      "text": "**On Stripe,** the [products and prices guide](https://docs.stripe.com/products-prices/how-products-and-prices-work) says the same plan billed monthly or annually is one product with two prices."
    },
    {
      "type": "ul",
      "items": [
        "**Switching:** the [change price page](https://docs.stripe.com/billing/subscriptions/change-price) says moving from monthly to yearly moves the billing date to the day of the switch, and when the billing date resets like this, Stripe tries to take payment right away. By default, if that payment fails, the change still goes through and the subscription is marked past due (payment owed). Stripe's [pending updates](https://docs.stripe.com/billing/subscriptions/pending-updates) option makes the change apply only once the payment succeeds.",
        "**The difference:** the [prorations page](https://docs.stripe.com/billing/subscriptions/prorations) says Stripe calculates it by default, down to the second. A credit from switching to something cheaper isn't refunded automatically, and you can turn proration off per change.",
        "**Portal:** for [Stripe's customer portal](https://docs.stripe.com/customer-management), the [portal settings](https://docs.stripe.com/customer-management/configure-portal) for plan switching and proration are both off by default. You can also schedule downgrades for the end of the billing period, between prices of the same product."
      ]
    },
    {
      "type": "h2",
      "text": "Refunds and cancelling a yearly plan"
    },
    {
      "type": "p",
      "text": "A year is a lot to pay at once, so decide your refund rule and publish it before people pay: a full refund within a number of days you choose, none after that, a partial refund for unused months, or something else."
    },
    {
      "type": "p",
      "text": "Cancelling usually means \"stop renewing\", not \"lock me out now\". A yearly customer who cancels in month three has paid for the year, so access should last until it ends. Both [Polar](https://polar.sh/docs/features/subscriptions/manage) and [Stripe](https://docs.stripe.com/billing/subscriptions/cancel) support cancelling at the end of the period."
    },
    {
      "type": "p",
      "text": "From the docs, as of 1 Nov 2026:"
    },
    {
      "type": "ul",
      "items": [
        "**Polar:** the [refunds page](https://polar.sh/docs/features/refunds) supports full and partial refunds. Refunding a subscription order doesn't end the subscription; you cancel it separately. Payment fees aren't returned. Polar also says it may refund an order itself, at its own discretion, within 60 days of purchase to head off a chargeback (a card dispute), even if you have a no-refunds policy. When it does, it also cancels the related subscription and removes the customer's access.",
        "**Stripe:** the [cancel page](https://docs.stripe.com/billing/subscriptions/cancel) says that when you cancel from the Dashboard, you can refund a prorated amount, the last payment in full, or nothing.",
        "**Renewal reminders:** Polar's [subscriptions page](https://polar.sh/docs/features/subscriptions/introduction) says it emails customers 7 days before renewal on plans of six months or longer, unless you turn it off. Stripe's [customer emails page](https://docs.stripe.com/billing/revenue-recovery/customer-emails) has a setting to turn on, \"Send emails about upcoming renewals\", with the timing set in your Dashboard."
      ]
    },
    {
      "type": "p",
      "text": "My guide to [refunds and cancellations](/blog/refunds-and-cancellations-ai-built-app) covers the access side in more detail."
    },
    {
      "type": "h2",
      "text": "What to test (in test mode, never with a real card)"
    },
    {
      "type": "p",
      "text": "Use Polar's [sandbox](https://polar.sh/docs/integrate/sandbox) or Stripe's test mode with their [test cards](https://docs.stripe.com/testing):"
    },
    {
      "type": "ol",
      "items": [
        "Buy the yearly plan. Check you get exactly the same access as a monthly customer.",
        "As a monthly customer, switch to yearly. Check the charge matches your rule, access stays, and there's one subscription, not two.",
        "As a yearly customer, switch to monthly. Check it happens when you decided, usually at the end of the year.",
        "Cancel a yearly plan. Check access lasts until the paid year ends, then stops.",
        "Refund a yearly payment. Check your refund rule happens (on Polar, cancel the subscription separately).",
        "Move time forward to the renewal. On Stripe, [test clocks](https://docs.stripe.com/billing/testing/test-clocks) do this, up to two billing periods at a time. Polar's docs don't describe a test clock. Its managing subscriptions page says you (not the customer) can reschedule the next renewal to any future date, which you can use in the sandbox to bring a renewal closer. The docs don't present this as a testing tool, so check the renewal really happens on the new date. In the sandbox, customer emails such as renewal reminders only reach members of your Polar organization.",
        "Make the renewal payment fail and check what the customer sees and when they lose access."
      ]
    },
    {
      "type": "p",
      "text": "Offer a free trial too? Run the yearly flow with it on; my guide to [adding a free trial](/blog/free-trial-vibe-coded-app) covers what to check."
    },
    {
      "type": "h2",
      "text": "Where ShipToPaid fits"
    },
    {
      "type": "p",
      "text": "I made [ShipToPaid](https://www.shiptopaid.com) so AI agents get payments right in apps like yours. The full pack's pricing copy skill covers adding an annual plan: it tells your agent to show the full yearly charge next to the per-month figure, keep monthly and yearly access the same, set up the yearly option as its own Polar product, and send existing subscribers to billing instead of selling them a second subscription. To be clear about its limits: the starter app itself comes with one monthly plan, its Stripe portal setup doesn't turn on plan switching, and the skill tells your agent to work out how switching should behave before promising smooth upgrades or proration. You don't need any of it to follow this guide."
    }
  ]
};
