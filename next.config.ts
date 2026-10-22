import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; manifest-src 'self'; worker-src 'self' blob:; media-src 'self'",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), magnetometer=(), gyroscope=(), accelerometer=(), xr-spatial-tracking=(), browsing-topics=(), interest-cohort=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "0" },
];

const apiHeaders = [
  { key: "X-Robots-Tag", value: "noindex, nofollow" },
  { key: "Cache-Control", value: "no-store" },
];

/**
 * Optional canonical host. Set `CANONICAL_REDIRECT_ORIGIN` (for example
 * `https://www.example.com`) once a custom domain is live and the public
 * pages permanently redirect to it.
 */
const canonicalOrigin = process.env.CANONICAL_REDIRECT_ORIGIN?.trim().replace(
  /\/+$/,
  ""
);

const canonicalRedirects = canonicalOrigin
  ? [
      { source: "/", destination: `${canonicalOrigin}/`, permanent: true },
      {
        source: "/:locale(id|es|fr|de|ja)",
        destination: `${canonicalOrigin}/:locale`,
        permanent: true,
      },
      {
        source: "/projects",
        destination: `${canonicalOrigin}/projects`,
        permanent: true,
      },
      {
        source: "/projects/:slug",
        destination: `${canonicalOrigin}/projects/:slug`,
        permanent: true,
      },
      {
        source: "/about",
        destination: `${canonicalOrigin}/about`,
        permanent: true,
      },
      {
        source: "/:locale(id|es|fr|de|ja)/about",
        destination: `${canonicalOrigin}/:locale/about`,
        permanent: true,
      },
      {
        source: "/sitemap.xml",
        destination: `${canonicalOrigin}/sitemap.xml`,
        permanent: true,
      },
      {
        source: "/robots.txt",
        destination: `${canonicalOrigin}/robots.txt`,
        permanent: true,
      },
    ]
  : [];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      { source: "/api/:path*", headers: apiHeaders },
    ];
  },
  async redirects() {
    return [
      // English lives at the root; /en is kept as a friendly alias.
      { source: "/en", destination: "/", permanent: true },
      ...canonicalRedirects,
    ];
  },
};

export default nextConfig;
