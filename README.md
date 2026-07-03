# Penarth Plumbers

Production-ready, static-first local plumbing lead-generation website built with Next.js, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` for a production check and `npm start` to serve the production build.

## Configuration

Copy `.env.example` to `.env.local` and update:

- `NEXT_PUBLIC_SITE_URL` — canonical production URL
- `NEXT_PUBLIC_PHONE` — public contact number
- `NEXT_PUBLIC_EMAIL` — public contact email

Core site details and area/service lists live in `lib/site.ts`. Provider/operator placeholders in the privacy policy and terms must be replaced before launch. The contact form currently shows a client-side demonstration success state; connect it to an approved form or CRM endpoint before collecting live enquiries.

## SEO

Each page has unique metadata and canonical URLs. The project includes Open Graph defaults, JSON-LD for the website, organisation, services and FAQs, plus generated `sitemap.xml` and `robots.txt`. No fake address, review, qualification or trading-history claims are included.

## Deploy to Vercel

Push the repository to GitHub, import it in Vercel, add the environment variables above, and deploy using the detected Next.js settings. Connect `penarthplumbers.co.uk` only after updating DNS as instructed by Vercel.
