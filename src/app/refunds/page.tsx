import { LegalPage, legalMetadata, Support } from "@/components/legal";

export const metadata = legalMetadata("/refunds", "Refund policy", "Try ShipToPaid for 14 days. If it's not for you, email us for a full refund. No questions asked.");

export default function Refunds() {
  return <LegalPage eyebrow="REFUNDS" title="Refund policy" intro={<p>Try ShipToPaid for 14 days. If it’s not for you, ask for a full refund. No questions asked.</p>} sections={[
    { heading: "How to get a refund", body: <><p>Email <Support /> within 14 days of buying. Include the email you bought with, or your order number, so we can find your purchase quickly. You don’t need to give a reason, but if you tell us what didn’t work, it helps us make ShipToPaid better.</p></> },
    { heading: "What happens next", body: <><p>We’ll process your refund through <a href="https://polar.sh" target="_blank" rel="noopener">Polar</a>, our payment provider, usually within 2 working days. You’ll get the full amount back, including any tax you paid, to your original payment method.</p><p>Banks can take 5 to 10 working days to show the money in your account, depending on your card and country.</p></> },
    { heading: "After a refund", body: <p>Your access to the paid pack ends, and you should stop using it and delete your copy. Anything you already built with it is fine to keep running while you swap it out. The free lite pack stays free and open for everyone.</p> },
    { heading: "After 14 days", body: <p>After 14 days, purchases aren’t usually refundable. But if something’s gone wrong, like you were charged twice or you can’t access what you paid for, email us and we’ll put it right.</p> },
    { heading: "Your legal rights", body: <p>This policy doesn’t affect any rights you have under consumer law where you live.</p> },
    { heading: "Questions", body: <p>Email <Support />. A real person (Deepak) will reply.</p> },
  ]} />;
}
