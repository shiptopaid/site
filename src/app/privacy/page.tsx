import { LegalPage, legalMetadata, Support } from "@/components/legal";

export const metadata = legalMetadata("/privacy", "Privacy policy", "What ShipToPaid collects, why, who we share it with, and how to ask us to see or delete your data. We don't sell your data.");

export default function Privacy() {
  return <LegalPage eyebrow="PRIVACY" title="Privacy policy" intro={<p>We collect as little as we can, only use it to run ShipToPaid, and never sell it. Here’s exactly what that means.</p>} sections={[
    { heading: "Who we are", body: <p>ShipToPaid is run by Deepak, an independent developer based in India. He’s responsible for your data. Contact: <Support />.</p> },
    { heading: "What we collect", body: <ul>
      <li><strong>Purchase details.</strong> When you buy, <a href="https://polar.sh" target="_blank" rel="noopener">Polar</a> collects your name, email, billing country and payment details. We receive your name, email, what you bought and the order details. We never see or store your full card number.</li>
      <li><strong>Your email.</strong> If you email us, we get your email address and whatever you write.</li>
      <li><strong>Analytics.</strong> We use Vercel Web Analytics and Speed Insights to see which pages are visited and how fast they load. They don’t use cookies and don’t identify you personally. They record things like the page, referrer, country, browser and device type.</li>
      <li><strong>Server logs.</strong> Our host, Vercel, keeps basic technical logs (like IP address and browser) for security and to keep the site running.</li>
    </ul> },
    { heading: "How we use it", body: <ul><li>To deliver your purchase and give you access.</li><li>To handle refunds and support requests.</li><li>To send important emails about your purchase, like access details or major updates.</li><li>To understand how the site is used and make it better.</li><li>To meet legal, tax and accounting requirements.</li></ul> },
    { heading: "What we don’t do", body: <p>We don’t sell your data, rent it, or share it for advertising. We don’t use advertising or cross-site tracking cookies.</p> },
    { heading: "Who we share it with", body: <><p>Only the services we need to run ShipToPaid:</p><ul><li><strong>Polar</strong>, our merchant of record, for payments, tax and receipts.</li><li><strong>Vercel</strong>, for hosting, analytics and speed monitoring.</li><li><strong>GitHub</strong>, if access to the pack is given through a GitHub repo.</li><li>Our email provider, to read and reply to your messages.</li></ul><p>We may also share data if the law requires it. Some of these services store data outside your country, including in the US.</p></> },
    { heading: "How long we keep it", body: <p>We keep purchase records for as long as tax and accounting laws require. We keep support emails while they’re useful for helping you. Analytics data is aggregated and kept by Vercel under its own policy.</p> },
    { heading: "Your rights", body: <><p>Wherever you live, you can ask us to:</p><ul><li>Show you the personal data we have about you.</li><li>Correct it if it’s wrong.</li><li>Delete it, unless we have to keep it by law (like tax records).</li><li>Send you a copy of it.</li><li>Stop using it for anything other than delivering your purchase.</li></ul><p>These include your rights under laws like the GDPR (EU and UK), the CCPA (California) and India’s Digital Personal Data Protection Act. We won’t treat you differently for using them. Just email <Support /> and we’ll reply within 30 days. If you’re in the EU or UK, you can also complain to your local data protection authority.</p></> },
    { heading: "Children", body: <p>ShipToPaid is for developers and isn’t meant for anyone under 16.</p> },
    { heading: "Changes", body: <p>If we change this policy, we’ll update the date at the top of this page. If it’s a big change, we’ll let buyers know by email.</p> },
    { heading: "Contact", body: <p>Questions about your privacy? Email <Support />.</p> },
  ]} />;
}
