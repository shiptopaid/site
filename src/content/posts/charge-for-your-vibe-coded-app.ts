import type { Post } from "@/lib/blog";

export const chargeForYourVibeCodedApp: Post = {
  "slug": "charge-for-your-vibe-coded-app",
  "title": "How to Charge for Your Vibe-Coded App: One-Time vs Subscription (and How to Set It Up)",
  "seoTitle": "How to Charge for Your Vibe-Coded App",
  "description": "A plain-English guide to charging for an app you built with Cursor, Claude Code or Codex: one-time vs subscription vs credits, Polar vs Stripe, and setup.",
  "date": "2026-10-17",
  "updated": "2026-11-02",
  "author": "Deepak",
  "readingMinutes": 7,
  "body": [
    {
      "type": "p",
      "text": "You built an app with Claude Code, Cursor or Codex. People are using it, a few have even said they'd pay for it. So now you're stuck on two questions: **how should I charge**, and **how do I actually set that up** without breaking anything?"
    },
    {
      "type": "p",
      "text": "I'm Deepak, a solo developer in Hyderabad, and I've wired payments into a lot of apps built with AI agents. This guide walks through the choice between charging once and charging every month, which payment company to pick, and the exact steps to get money flowing. No code required to follow along."
    },
    {
      "type": "p",
      "text": "If you want the bigger picture on what goes wrong after someone pays, read my first post: [How to add payments to an app you built with AI](/blog/add-payments-to-ai-built-app). This one is about the decision that comes before that."
    },
    {
      "type": "h2",
      "text": "The three ways to charge"
    },
    {
      "type": "p",
      "text": "Almost every small app uses one of these, or a mix:"
    },
    {
      "type": "ul",
      "items": [
        "**One-time payment.** The customer pays once and keeps access. Think of a template, a tool, a lifetime deal, or a downloadable pack.",
        "**Subscription.** The customer pays every month or every year, and access stops if they stop paying.",
        "**Credits (pay as you go).** The customer buys a bundle of uses, like 100 image generations, and buys more when they run out."
      ]
    },
    {
      "type": "p",
      "text": "There's no \"correct\" answer. The right one depends on one simple question."
    },
    {
      "type": "h2",
      "text": "The one question that decides it"
    },
    {
      "type": "p",
      "text": "**Does your app cost you money every time someone uses it?**"
    },
    {
      "type": "p",
      "text": "If yes, you probably want a subscription or credits. If no, a one-time payment is often simpler and easier to sell."
    },
    {
      "type": "p",
      "text": "Here's why. Many vibe-coded apps call an AI model, send emails, store files or run on a server that charges by use. Those costs keep coming as long as the customer keeps using the app. If you charge once, a heavy user can end up costing you more than they paid. A monthly price, or credits that run out, keeps what you earn in line with what you spend."
    },
    {
      "type": "p",
      "text": "If your app is mostly a fixed thing, like a calculator, a template, a desktop tool or a set of files, your costs don't grow much with each user. Charging once is honest and easy for buyers to say yes to."
    },
    {
      "type": "h2",
      "text": "One-time payment: when it fits"
    },
    {
      "type": "p",
      "text": "**Good for:** tools that don't cost you much to run, templates and starter kits, downloadable products, and \"lifetime access\" launch offers."
    },
    {
      "type": "p",
      "text": "**Why people like it:** buyers don't have to worry about another monthly bill. It's easier to explain, and there's nothing to cancel."
    },
    {
      "type": "p",
      "text": "**The catch:** you get paid once. To keep earning, you need a steady flow of new buyers, or paid upgrades later. And be careful with \"lifetime\" deals on apps that call AI models, because those costs don't stop."
    },
    {
      "type": "p",
      "text": "**What you need to set up:**"
    },
    {
      "type": "ol",
      "items": [
        "A product in your payment company's dashboard with a single price.",
        "A \"Buy\" button that sends people to the payment company's checkout page.",
        "Your app listening for the payment message (developers call this a webhook: an automatic note from the payment company saying \"this person paid\") and marking that person as a buyer.",
        "Paid pages that check \"is this person a buyer?\" before letting them in."
      ]
    },
    {
      "type": "p",
      "text": "That's it. No renewals, no cancellations, just refunds to handle."
    },
    {
      "type": "h2",
      "text": "Subscription: when it fits"
    },
    {
      "type": "p",
      "text": "**Good for:** apps people use regularly, apps with ongoing costs (AI, hosting, data), and apps you keep improving."
    },
    {
      "type": "p",
      "text": "**Why makers like it:** income that repeats every month, which makes it easier to plan and to keep paying for servers."
    },
    {
      "type": "p",
      "text": "**The catch:** more moving parts. People cancel, cards expire, payments fail, and some customers switch between plans. Your app has to react correctly to every one of those, not just the first payment. And buyers think harder before signing up for something that bills them forever, which is where a [free trial](/blog/free-trial-vibe-coded-app) can help."
    },
    {
      "type": "p",
      "text": "**What you need to set up:**"
    },
    {
      "type": "ol",
      "items": [
        "A product with a monthly price, and optionally a yearly price (often offered at a discount).",
        "A \"Subscribe\" button that goes to checkout.",
        "Your app listening for payment messages, not just \"paid\" but also \"renewed\", \"cancelled\", \"payment failed\" and \"refunded\", and updating the person's access each time.",
        "Paid pages that check \"is this subscription active right now?\"",
        "A \"Manage billing\" page where customers can change their card or cancel by themselves. Both Polar and Stripe offer a ready-made one, so you don't build it from scratch."
      ]
    },
    {
      "type": "p",
      "text": "Step 3 is where most AI-written setups go wrong. The agent handles the first payment and forgets the rest, so cancelled users keep access forever. My [first post](/blog/add-payments-to-ai-built-app) has a checklist to catch that. And if a customer has already paid and still can't get in, here's [what to do when a customer paid but has no access](/blog/customer-paid-but-no-access)."
    },
    {
      "type": "h2",
      "text": "Credits: the middle ground"
    },
    {
      "type": "p",
      "text": "If your costs depend heavily on how much someone uses the app, credits can be fairer than either option. Customers buy a pack, each use takes some away, and they top up when they run low. Light users pay little, heavy users pay more, and you never lose money on one person."
    },
    {
      "type": "p",
      "text": "The trade-off: your app has to keep an accurate balance for every user and never let it go below zero, even if someone clicks twice quickly. It's very doable, but test it carefully. My guide to [selling usage credits in your AI app](/blog/usage-credits-ai-app) walks through the choices and the tests."
    },
    {
      "type": "h2",
      "text": "Not sure? Start simple"
    },
    {
      "type": "p",
      "text": "If you can't decide, here's a reasonable default:"
    },
    {
      "type": "ul",
      "items": [
        "**Low running costs:** start with a one-time price. You can add a subscription tier later.",
        "**Real running costs (like AI calls):** start with one monthly plan. Just one. Add a yearly option or a second tier when people ask for it."
      ]
    },
    {
      "type": "p",
      "text": "Whatever you pick, you can change it. Your first price is a guess, and that's fine. Real customers will tell you more than any pricing article."
    },
    {
      "type": "h2",
      "text": "Polar vs Stripe for indie devs"
    },
    {
      "type": "p",
      "text": "Once you know how you'll charge, you need a payment company. For most solo makers the choice is Polar or Stripe. Both handle one-time payments and subscriptions well."
    },
    {
      "type": "p",
      "text": "**Polar** is a merchant of record. In plain words, Polar is the seller on paper: it collects and pays sales tax and VAT in the countries your customers buy from, then pays you. If you're selling worldwide on your own, that saves a lot of paperwork. The trade-off is a higher fee per sale than Stripe's basic rate, so check their current pricing page."
    },
    {
      "type": "p",
      "text": "**Stripe** handles the payment, but you're the seller, so tax is your job. Stripe Tax can work out the right amount to charge, and its paid Tax Complete plan can also handle tax registrations and filings for you. You're still the seller, though, so those registrations are in your name. In return you get more control and a huge set of features. Stripe also has its own merchant of record option, Managed Payments, for businesses based in the countries it supports."
    },
    {
      "type": "p",
      "text": "**My rule of thumb:** solo, selling digital products or subscriptions to many countries, and don't want to think about tax? Start with Polar. Already have a Stripe account or a business set up to handle tax? Use Stripe. Either way, first check that the one you pick can pay out to your country. And if tax worries you, a short chat with an accountant is money well spent. I compared the two in more detail (fees, payouts by country, features and switching later) in [Polar vs Stripe for indie makers](/blog/polar-vs-stripe-for-indie-makers)."
    },
    {
      "type": "h2",
      "text": "How to set it up, step by step"
    },
    {
      "type": "p",
      "text": "This works whether your app is in Next.js (the most common setup for vibe-coded web apps) or something else. You'll ask your AI agent to do most of it, but you stay in charge of checking it."
    },
    {
      "type": "ol",
      "items": [
        "**Create an account** with Polar or Stripe and stay in test mode (a practice mode where no real money moves).",
        "**Create your product and price** in the dashboard: one-time, monthly, or both.",
        "**Ask your agent to add checkout.** Be specific: \"Add a Subscribe button that sends logged-in users to Polar checkout for my Pro monthly product.\"",
        "**Ask it to handle payment messages,** and list them all: paid, renewed, cancelled, payment failed, refunded. Ask it to verify each message is genuine using the secret from the dashboard.",
        "**Ask it to lock paid pages** so they check access in your database, not just whether someone saw the thank-you page.",
        "**Add the billing page** so customers can cancel or update their card themselves.",
        "**Test everything** with a test card: buy, log out and in, cancel, refund, and try the billing page as a free user.",
        "**Switch to live mode,** copy over the live keys and add the live payment-message address. Don't test with your own real card: Polar and Stripe both ask you not to. On Polar, a 100% discount code made just for you lets you check the live setup. On Stripe, double-check the live settings and watch your first real sale closely."
      ]
    },
    {
      "type": "p",
      "text": "Step 7 is the one people skip, and it's the one that saves you from angry emails."
    },
    {
      "type": "h2",
      "text": "The one-prompt way: ShipToPaid"
    },
    {
      "type": "p",
      "text": "I got tired of writing those prompts by hand and fixing the same mistakes, so I turned the tested steps into written instructions, called skills, that Claude Code, Cursor and Codex can follow. That's [ShipToPaid](https://www.shiptopaid.com)."
    },
    {
      "type": "p",
      "text": "Instead of steps 3 to 6 above, you type **/add-paywall** in your agent, say whether you want one-time or subscription, and it follows a checklist that already covers the traps: checking that payment messages are real, handling cancellations and failed payments, and locking paid pages properly. A launch audit then walks you through the testing."
    },
    {
      "type": "p",
      "text": "Want to try it first? The [free lite pack on GitHub](https://github.com/shiptopaid/shiptopaid-lite) includes Polar checkout, Polar payment messages and a short launch check. The full pack adds Stripe, subscriptions that control access, a customer billing page, credits, license keys and a working Next.js starter app. Every skill is a plain file you can read and change."
    },
    {
      "type": "p",
      "text": "You don't need either to use this guide. Pick how you'll charge, pick a payment company, test the whole flow in test mode, and go get your first paying customer."
    }
  ]
};
