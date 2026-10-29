import type { Post } from "@/lib/blog";

export const freeTrialVibeCodedApp: Post = {
  "slug": "free-trial-vibe-coded-app",
  "title": "How to Add a Free Trial to Your Vibe-Coded App (Without Giving It Away)",
  "seoTitle": "How to Add a Free Trial to Your Vibe-Coded App",
  "description": "Want a free trial for your AI-built app? Card up front or not, how long, what happens when it ends, and how to set it up on Polar or Stripe. No code.",
  "date": "2026-10-29",
  "author": "Deepak",
  "readingMinutes": 8,
  "body": [
    {
      "type": "p",
      "text": "You built an app with an AI agent, it works, and you're ready to charge. Then the doubt creeps in: will anyone pay before they've tried it? A free trial is one answer. It's also one more thing your app has to get right, because now some people have the paid plan without having paid yet."
    },
    {
      "type": "p",
      "text": "I'm Deepak, a developer in Hyderabad. I build side projects with AI agents and spend a lot of my time wiring payments into apps made with Claude Code, Cursor and Codex. This guide covers whether you need a trial at all, the choices you have to make, what Polar and Stripe offer, and what to test. No code needed."
    },
    {
      "type": "p",
      "text": "Everything I say about Polar and Stripe comes from their own docs, as of 28 Oct 2026, linked so you can check again. These things change, so re-read the docs before you rely on a detail."
    },
    {
      "type": "h2",
      "text": "The short answer"
    },
    {
      "type": "p",
      "text": "A trial makes sense when people need to use your app for a few days before they can tell it's worth paying for. If one look at a demo video is enough, you may not need one. Decide three things before you ask your agent to build it: card up front or not, how long, and what happens on the last day. Then test it in test mode the way a real customer would use it."
    },
    {
      "type": "h2",
      "text": "Trial, free plan or money-back promise?"
    },
    {
      "type": "p",
      "text": "These three all lower the risk of paying, but they work differently:"
    },
    {
      "type": "ul",
      "items": [
        "**Free trial:** the full paid plan for a limited time. After that, the person pays or loses access.",
        "**Free plan:** a smaller version that's free forever, with a clear reason to upgrade (a limit, or features only paid users get). Your app has to enforce those limits itself.",
        "**Money-back promise:** people pay from day one, and you refund them if they ask within a set time. No special trial setup, but you do need to handle refunds properly (see my guide to [refunds and cancellations](/blog/refunds-and-cancellations-ai-built-app))."
      ]
    },
    {
      "type": "p",
      "text": "None of these is right for every app, and I'm not going to pretend one sells better than the others. If you sell a one-time purchase rather than a subscription, a trial usually doesn't apply at all; my guide on [how to charge for your vibe-coded app](/blog/charge-for-your-vibe-coded-app) covers that choice."
    },
    {
      "type": "h2",
      "text": "Card up front or not"
    },
    {
      "type": "p",
      "text": "This is the biggest decision, because it changes what happens when the trial ends."
    },
    {
      "type": "p",
      "text": "**With a card up front,** the person enters their card when they start. When the trial ends, they're charged and the subscription simply continues, unless they cancelled first. Fewer people start, because asking for a card is a bigger step. The people who do start have already decided they might pay. Be very clear about the date of the first charge, so nobody feels tricked."
    },
    {
      "type": "p",
      "text": "**Without a card,** anyone can start with just an account. When the trial ends, nothing is charged; they have to come back and choose to pay. More people try it, but your app now has to handle a lot of people whose trial ended without paying, and you need to remind them. Stripe's own docs warn that no-card trials can attract spam sign-ups and suggest asking for an account and a captcha first."
    },
    {
      "type": "p",
      "text": "Either way, tell people before they start: whether a card is needed, when the trial ends, what they'll be charged and how to cancel."
    },
    {
      "type": "h2",
      "text": "How long should the trial be?"
    },
    {
      "type": "p",
      "text": "There's no magic number. A good rule of thumb: long enough for a new user to reach the moment where they think \"yes, this is worth it\", plus a little slack."
    },
    {
      "type": "p",
      "text": "Find that moment by timing it. Ask a friend who has never seen your app to sign up and use it while you watch. If they get real value on day one, a short trial is fine. If your app only shows its worth after a week of use (a habit tracker, a weekly report), the trial has to cover that week."
    },
    {
      "type": "p",
      "text": "Longer isn't automatically kinder. Stripe's Checkout trial guide mentions that long trials can run into cards expiring before the first charge."
    },
    {
      "type": "h2",
      "text": "What Polar and Stripe offer (as of 28 Oct 2026)"
    },
    {
      "type": "p",
      "text": "**On Polar,** the [trials page](https://polar.sh/docs/features/subscriptions/trials) says you can set a trial on the product, on a checkout link, or when your app creates a checkout. The one on the checkout link or checkout wins over the product's. You pick a unit (day, week, month or year) and a number."
    },
    {
      "type": "ul",
      "items": [
        "**Card:** Polar still collects payment details at checkout. The customer isn't charged until the trial ends, and isn't charged at all if they cancel before then. I didn't find a no-card option on that page.",
        "**Reminder emails:** Polar emails the customer before the first charge: 3 days before for trials of 3 days or more, 1 day before for trials of 1 to 3 days, and none for trials shorter than a day. You can switch these off in your settings.",
        "**While trialing:** the subscription has the status \"trialing\". When the trial ends, Polar charges the customer automatically and the billing cycle starts.",
        "**Repeat trials:** there's a \"Prevent trial abuse\" setting. It blocks a new trial if the same email (ignoring tricks like name+alias@) or the same card has already used one, and the checkout continues at the normal price.",
        "**Changing a trial:** from the dashboard you can add, extend or end a customer's trial. Ending it charges them straight away."
      ]
    },
    {
      "type": "p",
      "text": "The trials page doesn't describe a failed first charge on its own. Polar's [failed payments page](https://polar.sh/docs/features/subscriptions/failed-payments) explains what happens when a subscription charge fails (the subscription goes \"past due\", then retries). Test the first charge failing in the sandbox and see what your app does."
    },
    {
      "type": "p",
      "text": "**On Stripe,** the [Checkout free trials guide](https://docs.stripe.com/payments/checkout/free-trials) says you set the trial length when your app creates the checkout, up to 730 days."
    },
    {
      "type": "ul",
      "items": [
        "**Card:** by default Checkout collects a card for after the trial. You can also start a trial without one. Then you choose what happens if no card has been added when it ends: the subscription is cancelled, or paused until they add one ([free trial periods](https://docs.stripe.com/billing/subscriptions/trials/free-trials)).",
        "**Reminder emails:** you can turn on a reminder email in your Stripe settings. Stripe's [trial rules page](https://docs.stripe.com/billing/subscriptions/trials/manage-trial-compliance) says it goes out 7 days before the trial ends (or right away if the trial is shorter than 7 days), and none are sent in test mode. The same page says you must follow card network rules for trials, so read it if you take cards up front.",
        "**While trialing:** the subscription has the status \"trialing\". Stripe also sends your app a \"trial will end\" payment message a few days before the end. When the trial ends, Stripe creates the first bill and tries to charge it about an hour later. If that charge fails, it's handled like any other failed payment.",
        "**Something to know:** Stripe now calls this kind of trial \"legacy\" and recommends a newer feature called [trial offers](https://docs.stripe.com/billing/subscriptions/trials) for new setups. Its page says Checkout only supports trial offers for invited accounts, so for a normal Checkout setup the trial guide above is still the one to read. If your agent mentions either, this is why."
      ]
    },
    {
      "type": "p",
      "text": "On Stripe, plan to handle \"one trial per person\" in your own app."
    },
    {
      "type": "h2",
      "text": "What your app has to do"
    },
    {
      "type": "p",
      "text": "Polar or Stripe runs the clock and the billing. Your app decides who can open what. That decision usually comes from a payment message: an automatic note Polar or Stripe sends your app when something changes (developers call these webhooks)."
    },
    {
      "type": "p",
      "text": "**Give access during the trial.** A subscription that is \"trialing\" should unlock the paid plan, just like \"active\". AI-written code often checks for \"active\" only, so trial users pay nothing and get nothing either."
    },
    {
      "type": "p",
      "text": "**What to ask your agent:** \"Treat subscriptions with status trialing the same as active for access. Show me where the app checks this.\""
    },
    {
      "type": "p",
      "text": "**End it at the right time if they don't pay.** If the trial ends without a payment (cancelled, paused, or a failed first charge), access should end too. Base it on what the payment company says, not on a date your app worked out on its own."
    },
    {
      "type": "p",
      "text": "**What to ask your agent:** \"When a trial ends without a successful payment, remove paid access. Use the payment messages, not a timer in our code.\""
    },
    {
      "type": "p",
      "text": "**Keep access with no gap if they do pay.** The switch from \"trialing\" to \"active\" shouldn't log anyone out or show the upgrade page for a moment."
    },
    {
      "type": "p",
      "text": "**One trial per person.** Decide your rule (for example, one trial per account) and make your app enforce it. On Polar, also switch on \"Prevent trial abuse\"."
    },
    {
      "type": "p",
      "text": "**What to ask your agent:** \"Only allow one free trial per account. If someone who already had a trial checks out again, start a normal paid subscription.\""
    },
    {
      "type": "h2",
      "text": "What to test (in test mode, never a real card)"
    },
    {
      "type": "p",
      "text": "Use test mode with test cards, which move no real money. After each step, check what your app shows, not just the dashboard:"
    },
    {
      "type": "ol",
      "items": [
        "Start a trial as a new user. The paid plan should unlock right away.",
        "Log out and back in. Still unlocked.",
        "End the trial early. On Polar, use \"End trial\" on the subscription in the sandbox dashboard. On Stripe, [test clocks](https://docs.stripe.com/billing/testing/test-clocks) let you fast-forward time.",
        "Check the first charge went through and access stayed on, with no gap.",
        "Start another trial and cancel it during the trial. No charge should happen, and access should follow your cancel rule (usually it lasts until the trial would have ended).",
        "Try a second trial with the same account. Your rule should kick in.",
        "Make the first charge fail with a declining [test card](https://docs.stripe.com/testing) and check you follow your failed-payment rule. My guide to [refunds and cancellations](/blog/refunds-and-cancellations-ai-built-app) covers failed renewals in more detail.",
        "If you went with no card, let a trial end without adding one. Access should end, and adding a card later should bring it back."
      ]
    },
    {
      "type": "p",
      "text": "If a trial user ever says they can't get in, my guide on [why customers get locked out after paying](/blog/customer-paid-but-no-access) walks through the usual causes."
    },
    {
      "type": "h2",
      "text": "Where ShipToPaid fits"
    },
    {
      "type": "p",
      "text": "I made [ShipToPaid](https://www.shiptopaid.com) so AI agents get payments right in apps like yours. Its starter and paywall skills already treat \"trialing\" the same as \"active\" for access, but the starter doesn't set up a trial for you; you switch that on in Polar or Stripe. The pricing skill helps you choose between a trial, a free plan and paid-only, and it tells your agent not to advertise a trial you haven't set up and tested. The launch audit walks you through checks like the ones above. You don't need any of it to follow this guide."
    }
  ]
};
