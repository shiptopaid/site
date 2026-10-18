export const checkoutUrl =
  process.env.NEXT_PUBLIC_POLAR_CHECKOUT_URL?.trim() || "https://buy.polar.sh/polar_cl_9XdX6cOj1DaF3kYYNSFkn6uyJRnfcQSMqxpp91LZLHy";

const canonicalSiteUrl = "https://www.shiptopaid.com";

/**
 * Base URL for absolute metadata URLs (og:image etc.). Defaults to the canonical www origin.
 * The bare shiptopaid.com domain only redirects to www, so it is mapped to www too.
 */
function resolveSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) return canonicalSiteUrl;
  try {
    const url = new URL(value);
    return url.hostname === "shiptopaid.com" ? canonicalSiteUrl : url.origin;
  } catch {
    return canonicalSiteUrl;
  }
}

export const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
