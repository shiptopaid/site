import type { Post } from "@/lib/blog";

export const addPaymentsToAiBuiltApp: Post = {
  "slug": "add-payments-to-ai-built-app",
  "title": "How to Add Payments to an App You Built With AI (Without It Breaking)",
  "seoTitle": "How to Add Payments to an App Built With AI",
  "description": "A plain-English guide for vibe coders: how the money moves, five payment bugs AI agents make, how to check each before launch, and Polar vs Stripe.",
  "date": "2026-10-17",
  "updated": "2026-10-22",
  "author": "Deepak",
  "readingMinutes": 7,
  "body": [
    {
      "type": "p",
      "text": "You built an app with Claude Code, Cursor or Codex. It works, and people like it. Now you want to charge for it, so you type \"add payments\" into your agent, and a few minutes later there's a checkout button. It feels done."
    },
    {
      "type": "p",
      "text": "It usually isn't. I'm Deepak, a solo developer in Hyderabad, and I've spent a lot of time wiring payments into apps built with AI agents. The checkout button is the easy part. The bugs hide in what happens **after** someone pays, and they don't show up in a demo. They show up when your first real customer emails you asking why they can't get in."
    },
    {
      "type": "p",
      "text": "This is the guide I wish I'd had: how the money moves, the five mistakes I keep seeing, how to check for each before launch, and how to choose between Polar and Stripe. You don't need to read any code to follow it."
    },
    {
      "type": "h2",
      "text": "How the money actually moves"
    },
    {
      "type": "p",
      "text": "Here's the whole flow in plain words:"
    },
    {
      "type": "ol",
      "items": [
        "A customer clicks \"Upgrade\" in your app.",
        "Your app sends them to a checkout page run by the payment company (Polar or Stripe). They type their card details there, not in your app. That's a good thing: you never touch card numbers.",
        "The payment goes through, and the customer is sent back to your app's \"thank you\" page.",
        "Separately, behind the scenes, the payment company sends your app a short message: \"this person just paid for Pro.\" Developers call this a webhook. I'll just call it the **payment message**.",
        "Your app reads that message, checks that it's real, and writes down in your database: \"this person has Pro.\"",
        "Every time that person opens a paid page, your app checks what it wrote down before letting them in."
      ]
    },
    {
      "type": "p",
      "text": "The key idea: **the thank-you page proves nothing.** Anyone can visit a thank-you page. The payment message in step 4 is what should unlock things. Similar messages later tell your app when someone cancels, gets a refund, or their card stops working. Almost every bug I see lives in steps 4 to 6."
    },
    {
      "type": "h2",
      "text": "The five things that go wrong (and how to check each one)"
    },
    {
      "type": "h3",
      "text": "1. The customer pays, but stays locked out"
    },
    {
      "type": "p",
      "text": "**What happens:** checkout works and the money arrives, but the app never updates the customer's account. Usually the payment message never reaches the app, or it arrives and gets ignored. Sometimes the app can't match the payment to the right person, for example when they used a different email at checkout."
    },
    {
      "type": "p",
      "text": "**How to check:** in test mode, sign up as a brand-new user, pay with a test card, and see whether the paid features unlock without you touching anything. Then log out, log back in, and check they're still unlocked. If you ever have to fix someone's account by hand, it's broken. Also open your payment company's dashboard: it shows whether its messages to your app were delivered or failed. If a customer is already locked out, I wrote a step-by-step guide on [what to do when a customer paid but can't get in](/blog/customer-paid-but-no-access)."
    },
    {
      "type": "h3",
      "text": "2. Cancelled users keep the paid features"
    },
    {
      "type": "p",
      "text": "**What happens:** someone cancels, but your app never takes access away. There's a sneakier version too: payment messages can arrive late and out of order. An old \"this person is active\" message shows up after the \"cancelled\" one, and your app happily gives access back."
    },
    {
      "type": "p",
      "text": "**How to check:** in test mode, subscribe and then cancel. Access should last until the end of the period they paid for, and then stop. Not right away, and not never. Do the same with a refund. Then ask your agent: \"If an older payment message arrives after a newer one, does the app ignore it?\""
    },
    {
      "type": "h3",
      "text": "3. Fake payment messages unlock premium"
    },
    {
      "type": "p",
      "text": "**What happens:** your app has a public address where it listens for payment messages. If it doesn't check that each message really came from Polar or Stripe, anyone who finds that address can send a fake \"this person paid\" message and get premium for free. Payment companies stamp every message with a secret so your app can tell it's genuine, but AI agents sometimes skip that check, or get it wrong and then \"fix\" it by switching the check off."
    },
    {
      "type": "p",
      "text": "**How to check:** ask your agent to send a made-up \"payment succeeded\" message to your app without the secret stamp. Your app must reject it. If it unlocks anything, stop and fix that before launch. While you're there, make sure the secret is stored in your app's settings, not pasted into the code."
    },
    {
      "type": "h3",
      "text": "4. The AI invents payment features that don't exist"
    },
    {
      "type": "p",
      "text": "**What happens:** payment companies update their tools often, and AI agents learned from older versions. So the agent confidently writes something that looks right but uses options that were renamed, removed, or never existed. The worst case is when it fails quietly and you only find out when a real payment doesn't unlock anything."
    },
    {
      "type": "p",
      "text": "**How to check:** tell your agent to follow only the payment company's official docs for the version your app actually uses, and to tell you which doc page each step came from. Then run the full flow in test mode, from clicking \"Upgrade\" to seeing paid features unlock. \"It builds without errors\" is not the same as \"it works.\""
    },
    {
      "type": "h3",
      "text": "5. The billing page breaks for free users"
    },
    {
      "type": "p",
      "text": "**What happens:** you add a \"Manage billing\" button so customers can update their card or cancel. A free user clicks it, and because they've never paid, the payment company has no record of them, so the page shows an error."
    },
    {
      "type": "p",
      "text": "**How to check:** log in as a free user who has never paid and click everything billing-related. Either hide \"Manage billing\" from people who never paid, or show them a friendly \"You're on the free plan\" message instead."
    },
    {
      "type": "p",
      "text": "One bonus check if you have more than one plan: buy the cheapest one and make sure it never unlocks the features of a more expensive one."
    },
    {
      "type": "h2",
      "text": "A simple pre-launch checklist"
    },
    {
      "type": "p",
      "text": "Run through this in test mode before you switch to real money. It doesn't take long, and it heads off the \"I paid, why can't I get in?\" emails."
    },
    {
      "type": "ul",
      "items": [
        "A brand-new user pays with a test card, and paid features unlock on their own.",
        "They log out and back in, and features are still unlocked.",
        "They cancel, and access ends at the end of the period they paid for.",
        "They get a refund, and access goes away.",
        "A fake payment message without the secret stamp is rejected.",
        "A free user opens the billing page, and nothing breaks.",
        "The cheapest plan never unlocks a more expensive plan.",
        "Your payment dashboard shows messages to your app as delivered, not failing.",
        "Your secret keys live in your app's settings, not in the code.",
        "Terms, Privacy and Refund pages exist and are linked from your site. Payment companies often ask for them.",
        "After going live, you make one real purchase yourself with a real card, check that it unlocks, then refund it."
      ]
    },
    {
      "type": "p",
      "text": "That last one matters. Test mode and live mode use separate keys and settings, and it's easy to update one and forget the other."
    },
    {
      "type": "h2",
      "text": "Polar or Stripe, in plain terms"
    },
    {
      "type": "p",
      "text": "Both are solid. The biggest practical difference is who deals with sales tax."
    },
    {
      "type": "p",
      "text": "**Polar** is what's called a merchant of record. In plain words, Polar is the seller on paper: it collects and pays sales tax and VAT in the countries your customers buy from, then pays you out. For a solo maker selling worldwide, that removes a pile of paperwork. The trade-off is a higher fee per sale than Stripe's basic rate, so check their current pricing."
    },
    {
      "type": "p",
      "text": "**Stripe** processes the payment, but you are the seller, so tax is your job. Stripe has a tax add-on that can work out and collect the right amount, but registering and filing is still on you. In return you get more control, which suits you if you already have a Stripe account or need something specific."
    },
    {
      "type": "p",
      "text": "My rule of thumb: if you're solo, selling a digital product or subscription to people in many countries, and you don't want to think about tax, start with Polar. If you already use Stripe or have a business set up to handle tax, use Stripe. Either way, before you build anything, check that the one you pick can pay out to your country. And if tax questions worry you, a short chat with an accountant is worth it. I compared the two in more detail (fees, payouts by country, features and switching later) in [Polar vs Stripe for indie makers](/blog/polar-vs-stripe-for-indie-makers)."
    },
    {
      "type": "p",
      "text": "The checks above apply to both: the bugs are about how your app reacts to payments, not which company handles them. If you're still deciding whether to charge once, every month or by credits, I wrote a separate guide on [how to charge for your vibe-coded app](/blog/charge-for-your-vibe-coded-app)."
    },
    {
      "type": "h2",
      "text": "Where ShipToPaid fits"
    },
    {
      "type": "p",
      "text": "I hit every one of these problems myself while building a real app, so I turned the fixes into written instructions, called skills, that Claude Code, Cursor and Codex can follow. That's [ShipToPaid](https://www.shiptopaid.com). Instead of hoping your agent remembers to check the secret stamp or ignore late messages, you type a plain request like \"/add-paywall add payments to my app,\" and it follows tested steps with those traps already written down. A launch audit then walks through a checklist like the one above."
    },
    {
      "type": "p",
      "text": "If you want to see how it works first, there's a [free lite pack on GitHub](https://github.com/shiptopaid/shiptopaid-lite) with three skills: Polar checkout, Polar payment messages, and a short launch check. The full pack adds Stripe, access that follows payments, a customer billing page, credits, license keys, five ready-made commands and a working Next.js starter app. Every skill is a plain file you can read and change."
    },
    {
      "type": "p",
      "text": "You don't need either one to use this guide. Run the checklist in test mode, fix whatever fails, and your first paying customer will get exactly what they paid for. That's the whole goal."
    }
  ]
};
