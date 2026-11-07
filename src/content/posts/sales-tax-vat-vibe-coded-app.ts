import type { Post } from "@/lib/blog";

export const salesTaxVatVibeCodedApp: Post = {
  "slug": "sales-tax-vat-vibe-coded-app",
  "title": "Sales Tax and VAT for Vibe-Coded Apps: What You Actually Have to Do",
  "seoTitle": "Sales Tax and VAT for Vibe-Coded Apps",
  "description": "Selling your AI-built app worldwide? Merchant of record vs collecting tax yourself, when sales tax and VAT start to matter, and what Polar and Stripe do.",
  "date": "2026-11-09",
  "author": "Deepak",
  "readingMinutes": 8,
  "body": [
    {
      "type": "p",
      "text": "Your app has its first few paying customers: one in Germany, one in the US, one in India. Then somebody asks for an invoice with their VAT number on it, and you realise you never thought about tax. Did you have to charge it? Who pays it to which government?"
    },
    {
      "type": "p",
      "text": "I'm Deepak, a developer in Hyderabad. I build side projects with AI agents and spend a lot of my time wiring payments into apps made with Claude Code, Cursor and Codex. This guide explains sales tax and VAT for a small app sold online, in plain words, and what Polar and Stripe actually do about it. No code needed."
    },
    {
      "type": "note",
      "text": "This is not tax or legal advice. I'm not an accountant, and tax rules depend on where you live, where your customers are and what you sell. Use this to understand the options, then check your own situation with an accountant or tax adviser."
    },
    {
      "type": "p",
      "text": "Everything I say about Polar and Stripe comes from their own docs, as of 3 Nov 2026, linked so you can check again. Re-read them before you rely on a detail."
    },
    {
      "type": "h2",
      "text": "The short answer"
    },
    {
      "type": "p",
      "text": "When you sell software online to people in other countries, many of those places expect a tax on each sale (VAT, GST or US sales tax), even if you've never been there. Someone has to work out the right amount, charge it at checkout, and pay it to the right government. You have two ways to handle that:"
    },
    {
      "type": "ul",
      "items": [
        "**Use a merchant of record**, like Polar. It becomes the seller on paper and takes that tax job on.",
        "**Be the seller yourself**, with Stripe for example. Then registering, collecting and filing are yours, and Stripe Tax can help with the collecting part."
      ]
    },
    {
      "type": "p",
      "text": "Either way, the income tax on what you earn is still yours to sort out where you live."
    },
    {
      "type": "h2",
      "text": "Merchant of record, in plain words"
    },
    {
      "type": "p",
      "text": "A merchant of record is the business that legally sells the product to your customer. Normally that's you. With a merchant of record, it's the provider: it buys from you and resells to the customer, so the tax on that sale is its problem, not yours."
    },
    {
      "type": "p",
      "text": "[Polar's merchant of record page](https://polar.sh/docs/merchant-of-record/introduction) describes itself exactly that way, as a reseller of your digital product. It says it takes on the liability for international sales taxes, is registered in places around the world, watches sales volumes, registers in new places when it needs to, and handles the filing and payment. It's also open about the trade-offs: fees are higher than a plain payment processor, you get less flexibility, and because Polar's sales count rather than yours, tax may be added for more of your customers than if you sold directly. The same page is clear that you're still responsible for your own income tax in your country."
    },
    {
      "type": "p",
      "text": "When you sell directly, you are the merchant of record, and as Polar's page puts it, the tax liabilities of each sale are yours."
    },
    {
      "type": "h2",
      "text": "When does it start to matter?"
    },
    {
      "type": "p",
      "text": "People want a single number here, and there isn't one. Each country, and each US state, has its own rules about when a seller from abroad must register and charge tax. Some only care once your sales there pass a threshold. Polar's page notes that others, such as the UK and EU countries, expect sellers from abroad to register before their first sale."
    },
    {
      "type": "p",
      "text": "Stripe's [how Stripe Tax works](https://docs.stripe.com/tax/how-tax-works) page says the same thing in its own words: some places want you registered before your first transaction, others have a threshold based on number of sales or sales volume. Its [supported countries page](https://docs.stripe.com/tax/supported-countries) lists the thresholds it tracks, with links to the tax authority websites."
    },
    {
      "type": "p",
      "text": "I won't quote thresholds, because they change and depend on your situation. If you sell directly, that's the question for an accountant: \"Where do I need to register, and when?\""
    },
    {
      "type": "h2",
      "text": "What Polar does (as of 3 Nov 2026)"
    },
    {
      "type": "ul",
      "items": [
        "**It's the seller.** It calculates, collects and pays the tax on your sales, and its receipts list the tax.",
        "**Prices with or without tax.** The [tax inclusive pricing page](https://polar.sh/docs/features/tax-inclusive-pricing) gives you three settings. The default, location-based, adds tax on top for customers in the US, Canada and India, and includes it in the price everywhere else (the EU and UK, for example). You can also choose always-inclusive or always-exclusive. Polar says this setting only changes how the price is shown, not how much tax is owed.",
        "**Business customers.** The [orders page](https://polar.sh/docs/features/orders) says Polar makes a PDF invoice for every paid order, and customers can add a company name, VAT number or billing address to their own invoice from the [customer portal](https://polar.sh/docs/features/customer-portal/introduction).",
        "**Refunds.** The [refunds page](https://polar.sh/docs/features/refunds) says the matching tax is refunded automatically: all of it on a full refund, a share of it on a partial one."
      ]
    },
    {
      "type": "p",
      "text": "Polar's own example: a $10 a month plan should cost a consumer in Sweden $12.50 with 25% VAT, but $10 for a Swedish business with a VAT registration, which handles that VAT itself (a \"reverse charge\"). A merchant of record works that out on every sale."
    },
    {
      "type": "h2",
      "text": "What Stripe does (as of 3 Nov 2026)"
    },
    {
      "type": "p",
      "text": "On Stripe's normal setup, you are the seller. [Stripe Tax](https://docs.stripe.com/tax) is an add-on that helps:"
    },
    {
      "type": "ul",
      "items": [
        "**Calculating and collecting.** It works out sales tax, VAT and GST at checkout based on the product and the customer's location. But Stripe's [testing page](https://docs.stripe.com/tax/testing) is clear that it only calculates tax where you've added a registration. Turning it on doesn't make you registered anywhere.",
        "**Registering.** The [registration page](https://docs.stripe.com/tax/registering) says it's your job to work out where you have tax obligations and register there, then add those registrations to Stripe. You can also ask Stripe to register for you: directly for US states where you're a remote seller, and through a partner, Taxually, for other countries.",
        "**Filing.** The [file and remit page](https://docs.stripe.com/tax/filing) says you must file and pay the tax you collect everywhere you're registered. Registering and filing are separate services. Stripe offers automated filing in the US and for some registrations in Ireland and Canada, works with filing partners, or gives you reports to file yourself. Global filing is labelled private preview.",
        "**Watching thresholds.** The [monitoring page](https://docs.stripe.com/tax/monitoring) says Stripe tracks your sales by location against local thresholds and highlights where you might need to register, but it's up to you to confirm it. Its threshold emails start once you have 10,000 USD in yearly revenue.",
        "**Prices with or without tax.** The [tax behavior page](https://docs.stripe.com/tax/products-prices-tax-codes-tax-behavior) recommends \"Automatic\": tax added on top for prices in USD and CAD, included for every other currency. Note the difference from Polar: Stripe goes by the price's currency, not the customer's country. And once you set a price to inclusive or exclusive, you can't change it.",
        "**Business customers.** Checkout can [collect VAT and other business tax IDs](https://docs.stripe.com/tax/checkout/tax-ids). Stripe checks the format, and you're responsible for making sure the number is valid."
      ]
    },
    {
      "type": "p",
      "text": "Stripe Tax has its own fees, listed on [Stripe's tax pricing page](https://stripe.com/tax/pricing)."
    },
    {
      "type": "p",
      "text": "**Stripe now has a merchant of record option too.** [Managed Payments](https://docs.stripe.com/payments/managed-payments) makes Stripe the seller for digital products and handles sales tax, VAT and GST in more than 80 countries; customers see \"Sold through Link\". The [eligibility page](https://docs.stripe.com/payments/managed-payments/eligibility) lists which countries your business can be based in (India isn't one as I write this), and it only works with Stripe's own checkout page and payment links."
    },
    {
      "type": "p",
      "text": "If you're still choosing between the two, my [Polar vs Stripe comparison](/blog/polar-vs-stripe-for-indie-makers) covers fees and payouts too."
    },
    {
      "type": "h2",
      "text": "What your app has to get right"
    },
    {
      "type": "p",
      "text": "Whoever handles the tax, your pricing page and app are yours. I'd check:"
    },
    {
      "type": "ul",
      "items": [
        "**Say whether tax is included.** \"$20/month\" on your pricing page should match what checkout shows. If tax gets added on top for some customers, say \"plus tax where applicable\" near the price. Don't promise \"tax included\" unless your setup does that for everyone.",
        "**The checkout total is the real number.** A customer who sees one price on your site and a bigger one at checkout feels tricked, even if the extra is real tax. With made-up example numbers: a $20 plan with 20% tax added on top is $24 at checkout. Shown tax-included, it stays $20 and the tax comes out of your share. Neither is wrong; just know which one you chose.",
        "**Business customers need proper invoices.** If businesses buy from you, they'll want their company name and VAT number on the invoice. Check where they can add it.",
        "**Access shouldn't depend on tax.** Your app should unlock when the provider confirms the payment (it sends your app a payment message, a webhook), whatever the total was. If a customer paid but can't get in, my guide on [why customers get locked out after paying](/blog/customer-paid-but-no-access) covers the usual causes."
      ]
    },
    {
      "type": "p",
      "text": "Things to ask your agent:"
    },
    {
      "type": "ul",
      "items": [
        "\"Does our pricing page say whether tax is included, and does it match how our checkout is set up?\"",
        "\"Do we collect the billing address our payment provider needs to work out tax?\"",
        "\"Can business customers add a VAT number at checkout or afterwards, and where does it show up?\""
      ]
    },
    {
      "type": "h2",
      "text": "What to test (in test mode, never with a real card)"
    },
    {
      "type": "p",
      "text": "Use Polar's [sandbox](https://polar.sh/docs/integrate/sandbox) or Stripe's test mode. On Stripe, add at least one test registration first, or no tax will be calculated."
    },
    {
      "type": "ol",
      "items": [
        "Check out with an address in the US, one in an EU country and one in India. Check the tax line and total each time.",
        "Compare each total with your pricing page. Fix the wording where they don't match.",
        "Buy as a business with a test VAT number (at Stripe checkout if you turned on tax ID collection, or on the invoice in Polar's portal). Check the tax and that the number shows on the invoice.",
        "Download the receipt or invoice. Check it lists the tax and the right seller.",
        "Refund a test order. Check the tax goes back with it.",
        "Check access unlocks the same way for every country."
      ]
    },
    {
      "type": "h2",
      "text": "Where ShipToPaid fits"
    },
    {
      "type": "p",
      "text": "I made [ShipToPaid](https://www.shiptopaid.com) so AI agents get payments right in apps like yours. To be clear about what it does on tax: it doesn't handle tax for you. Its Stripe guidance says plainly that Stripe isn't a merchant of record, that the starter doesn't turn on automatic tax, and that collecting an address alone doesn't switch on Stripe Tax. Its pricing copy skill tells your agent to match any tax wording to how your checkout is really set up, and never assume tax is included. On Polar, Polar is the merchant of record. You don't need any of it to follow this guide."
    },
    {
      "type": "p",
      "text": "Adding a yearly option too? My guide to [yearly plans](/blog/yearly-plan-vibe-coded-app) covers showing that price honestly. Haven't picked how to charge yet? Start with [how to charge for your vibe-coded app](/blog/charge-for-your-vibe-coded-app)."
    }
  ]
};
