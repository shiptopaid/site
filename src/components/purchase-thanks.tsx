"use client";

import { useEffect, useState } from "react";

const PORTAL_URL = "https://polar.sh/shiptopaid/portal";

// Shown only after checkout redirects back with ?purchased=1.
// The customer_session_token is passed straight to Polar's portal and nowhere else.
export function PurchaseThanks() {
  const [portalHref, setPortalHref] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("purchased") !== "1") return;
    const token = params.get("customer_session_token");
    setPortalHref(token ? `${PORTAL_URL}?customer_session_token=${encodeURIComponent(token)}` : PORTAL_URL);
  }, []);

  if (!portalHref) return null;

  return (
    <section role="status" className="bg-forest-ink text-paper">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="m-0 text-2xl font-bold tracking-tight text-lime">You&apos;re in! One last step: connect your GitHub account to get access to the private repo.</p>
          <p className="mb-0 mt-2 text-sm text-linen-mist">Check your email for the receipt. Questions? <a className="underline" href="mailto:support@shiptopaid.com">support@shiptopaid.com</a></p>
        </div>
        <a href={portalHref} rel="noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-pill bg-lime px-6 py-[11px] text-base font-medium text-forest-ink hover:bg-linen-mist">Connect GitHub &amp; get access</a>
      </div>
    </section>
  );
}
