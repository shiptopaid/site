import type { Post } from "@/lib/blog";

export const customerPaidButNoAccess: Post = {
  "slug": "customer-paid-but-no-access",
  "title": "\"I Paid but Can't Get In\": Why Customers Get Locked Out of AI-Built Apps (and How to Fix It)",
  "seoTitle": "Customer Paid but Has No Access? How to Fix It",
  "description": "Customer paid but can't get in? A calm, plain-English fix guide for AI-built apps: what to do first, the five usual causes, and a 10-minute test to run.",
  "date": "2026-10-19",
  "updated": "2026-10-20",
  "author": "Deepak",
  "readingMinutes": 7,
  "body": [
    {
      "type": "p",
      "text": "It's the email every app maker dreads: **\"I just paid. Why can't I get in?\"**"
    },
    {
      "type": "p",
      "text": "The checkout worked, the money moved, and your customer is still looking at a locked page. If you built your app with Claude Code, Cursor or Codex, it's worth being ready for this before it happens."
    },
    {
      "type": "p",
      "text": "I'm Deepak, a solo developer in Hyderabad, and I spend a lot of my time wiring payments into apps built with AI agents. This is the calm, step-by-step guide I'd want open the moment that email lands: what to do first, where the problem usually hides, and how to stop it happening again. No code needed."
    },
    {
      "type": "p",
      "text": "If you haven't set up payments yet, start with my bigger guide on [how to add payments to an app you built with AI](/blog/add-payments-to-ai-built-app). This post zooms in on the most painful bug from that list."
    },
    {
      "type": "h2",
      "text": "First, the next 10 minutes"
    },
    {
      "type": "p",
      "text": "Don't start debugging yet. Look after the person first."
    },
    {
      "type": "ol",
      "items": [
        "**Check the payment is real.** Open your Polar or Stripe dashboard and search for their email. If you see a successful payment, they paid. If not, ask for their receipt; they may have used another email.",
        "**Give them access by hand.** Mark their account as paid yourself, or ask your agent to update that one user. Do it now.",
        "**Reply kindly.** Something like: \"Thanks for buying, and sorry about that. You should have full access now. Could you log out, log back in, and tell me if it works?\" Short, human, no excuses.",
        "**Write down the details.** Their checkout email, login email, plan and payment time."
      ]
    },
    {
      "type": "p",
      "text": "Fixing one account by hand is a rescue, not a fix. If it happened once, it will happen again."
    },
    {
      "type": "h2",
      "text": "How access is supposed to work (30-second recap)"
    },
    {
      "type": "p",
      "text": "When someone pays, this is what should happen:"
    },
    {
      "type": "ol",
      "items": [
        "Your customer pays on the payment company's checkout page.",
        "The payment company sends your app a payment message saying \"this person paid for this plan.\" Developers call this a webhook. It's just an automatic message from Polar or Stripe to a web address in your app.",
        "Your app checks that the message is genuine, using a secret from the payment dashboard.",
        "Your app finds the right user and saves \"this person has Pro\" in your database.",
        "Your paid pages read that saved note and let the person in."
      ]
    },
    {
      "type": "p",
      "text": "Notice what's missing: the thank-you page. It proves nothing. Access should come from step 4. When someone is locked out, one of steps 2 to 5 broke. Here they are in the order I check them."
    },
    {
      "type": "h2",
      "text": "Where it breaks, and how to tell"
    },
    {
      "type": "h3",
      "text": "1. The payment message never arrives"
    },
    {
      "type": "p",
      "text": "**What happened:** the payment company tried to tell your app, but the message went nowhere. Usually the address saved in the payment dashboard is wrong: a typo, an old address, or one that only worked on your own computer. Or you set it up in test mode and never added it in live mode, which has its own separate settings."
    },
    {
      "type": "p",
      "text": "Two sneakier ones: the saved address redirects (say, it has no \"www\" and your host forwards to \"www\"), which payment companies count as a failed delivery, or your app's login protection blocks it."
    },
    {
      "type": "p",
      "text": "**How to tell:** open the payment dashboard and find the list of payment messages it has sent (both Polar and Stripe show this in their webhook settings). Find the attempts for this customer's payment. Failed deliveries mean this is your problem. No attempts at all usually means no address is saved for live mode."
    },
    {
      "type": "p",
      "text": "**What to ask your agent:** \"This is the address saved in my live payment dashboard for payment messages. Does my live app actually accept messages there, without a redirect or a login check in the way? List everything that differs between my test and live setup.\""
    },
    {
      "type": "h3",
      "text": "2. It arrives, but your app rejects it"
    },
    {
      "type": "p",
      "text": "**What happened:** the message reached your app, but the \"is this real?\" check failed, so your app threw it away. Right for fake messages, wrong for real ones. The usual cause is the wrong secret: the test secret is still saved in your live app, or the live secret was pasted with a character missing."
    },
    {
      "type": "p",
      "text": "**How to tell:** in the same dashboard list, the delivery shows an error from your app instead of success. Your hosting logs often show it too."
    },
    {
      "type": "p",
      "text": "**What to ask your agent:** \"My live payment messages are being rejected. Check which secret my live app uses and whether it's the live one from the dashboard. Don't turn off the check. Fix the secret.\""
    },
    {
      "type": "p",
      "text": "Never \"fix\" this by switching the check off. That's the door fake payment messages walk through."
    },
    {
      "type": "h3",
      "text": "3. It's accepted, but matched to the wrong person"
    },
    {
      "type": "p",
      "text": "**What happened:** your app got a genuine message but couldn't tell which of your users it belongs to. This happens when someone logs in with one email and types another at checkout, or when checkout was never linked to the logged-in user, so the app only has an email to go on."
    },
    {
      "type": "p",
      "text": "**How to tell:** compare the email on the payment with the email they log in with. If they differ, this is probably it. You may also find a new, empty account under the checkout email."
    },
    {
      "type": "p",
      "text": "**What to ask your agent:** \"When a logged-in user starts checkout, link the checkout to their account, so the payment message points back to that exact user instead of matching by email.\""
    },
    {
      "type": "h3",
      "text": "4. It's matched, but the wrong plan is saved"
    },
    {
      "type": "p",
      "text": "**What happened:** your app found the right person but saved the wrong thing. Maybe it saved a product name your paid pages don't recognize, or the paid pages look for \"Pro\" while the app saved \"Pro Monthly.\" Or the product was re-created in live mode and your app only knows the test one."
    },
    {
      "type": "p",
      "text": "**How to tell:** look at what your database says about this user. If it says they paid but names a plan your paid pages don't know, that's the gap."
    },
    {
      "type": "p",
      "text": "**What to ask your agent:** \"List every product and price my app knows about, for test and live, and compare them with my live dashboard. Then show me exactly what my paid pages check before letting someone in.\""
    },
    {
      "type": "h3",
      "text": "5. Everything is saved, but the app shows old info"
    },
    {
      "type": "p",
      "text": "**What happened:** your database is correct, but the customer's login still carries their old \"free\" status."
    },
    {
      "type": "p",
      "text": "**How to tell:** ask the customer to log out and back in. If that fixes it, this is your problem."
    },
    {
      "type": "p",
      "text": "**What to ask your agent:** \"After a payment, make sure paid pages read the user's current plan from the database, not from old login info, so access updates without logging out.\""
    },
    {
      "type": "h2",
      "text": "A 10-minute test you can run yourself"
    },
    {
      "type": "p",
      "text": "Once you think it's fixed, prove it. Do this in test mode, the practice mode where you use test cards and no real money moves:"
    },
    {
      "type": "ol",
      "items": [
        "Sign up as a brand-new user with an email you've never used.",
        "Buy your plan with a test card from the payment company's docs.",
        "Open the payment dashboard and check the payment message was delivered successfully.",
        "Go back to your app without touching anything. Are the paid pages unlocked?",
        "Log out, log back in, and check again.",
        "Sign up as another new user, and this time type a different email at checkout. Does the right account get access?",
        "If you sell several plans, check that the cheapest one doesn't open a pricier plan's pages."
      ]
    },
    {
      "type": "p",
      "text": "If every step passes, check live mode too, but not with your own real card: Polar and Stripe both ask you not to test with real card details. On Polar, buy with a 100% discount code made just for you and check access the same way. On Stripe, make sure the live keys and the live payment-message address are saved, then check access the moment your first real sale lands."
    },
    {
      "type": "h2",
      "text": "Make it impossible to miss next time"
    },
    {
      "type": "p",
      "text": "You can't promise a bug never comes back, but you can hear about it before a customer has to write."
    },
    {
      "type": "ul",
      "items": [
        "**Watch for failure emails.** Polar and Stripe both email you when messages to your app keep failing. Make sure those emails reach an inbox you actually read.",
        "**Give customers a way out.** Put a small \"Paid but still locked? Restore my purchase\" button, or at least a support email, on your paid pages. A restore button just asks the payment company again about that user.",
        "**Re-test after every payment change.** New price, new plan, new secret, new domain: run the 10-minute test again. The [pre-launch checklist in my first guide](/blog/add-payments-to-ai-built-app) covers the rest.",
        "**Keep test and live in step.** When you change something in test mode, note the matching change for live mode."
      ]
    },
    {
      "type": "p",
      "text": "If you're still choosing between one-time, subscription or credits, my guide on [how to charge for your vibe-coded app](/blog/charge-for-your-vibe-coded-app) helps you decide. Subscriptions add a few more things to test, like cancellations and failed renewals. If you haven't picked a payment company yet, my guide to [Polar vs Stripe for indie makers](/blog/polar-vs-stripe-for-indie-makers) compares fees, payouts by country and features."
    },
    {
      "type": "h2",
      "text": "Where ShipToPaid fits"
    },
    {
      "type": "p",
      "text": "I wrote [ShipToPaid](https://www.shiptopaid.com) so AI agents get these steps right the first time. Its skills cover linking checkout to the logged-in user, checking every payment message is genuine, and a launch audit that walks you through a test like the one above. The [free lite pack](https://github.com/shiptopaid/shiptopaid-lite) has the Polar pieces. The full pack adds Stripe and access that follows payments. You don't need either to use this guide."
    }
  ]
};
