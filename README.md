# Sonaro Promotion — starter

A responsive Next.js + TypeScript frontend starter for a worldwide paid business directory.

## What is included
- Responsive landing page and business directory
- Client-side search and category filter
- Demo listing submission form with validation
- Starter and Premium pricing presentation
- Demo business cards and placeholder links

## Important limitations
This is a **frontend starter**, not a production listing/payment system. The form does not save submissions, listings are hard-coded demo data, and no payment is taken. Do not advertise it as live paid listings until a database, authentication/admin workflow, payment order creation, server-side payment verification, webhook handling, spam protection, privacy/terms pages, and email notifications are implemented and tested.

## Requirements
- Node.js 20.9 or newer
- npm
- A code editor such as VS Code

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

Check a production build:
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Create a GitHub repository and push this project.
2. Import that repository at https://vercel.com/new.
3. Keep the default Next.js build settings and deploy.
4. Add a custom domain in the Vercel project settings after purchasing it from a registrar.
5. Configure DNS as shown by Vercel.

## Suggested next production milestones
1. Create a Supabase project and tables for `listings`, `payments`, and admin/user profiles.
2. Add authentication and strict Row Level Security policies. Public visitors should only read approved, non-expired listings.
3. Build a server endpoint that creates Razorpay orders using secret environment variables.
4. Verify the checkout signature on the server using HMAC SHA-256 and the secret; verify payment/order status with Razorpay before activating a listing.
5. Add Razorpay webhooks (at minimum `payment.captured`, `payment.failed`, and `order.paid`) with signature validation and idempotency.
6. Add an admin review queue. Payment success should not automatically bypass content review.
7. Add privacy policy, terms, refund/cancellation policy, contact details, and a report-listing process.

## Domain ideas
Check availability at a registrar before choosing:
- `sonaropromotion.com`
- `sonaro.directory`
- `sonarobiz.com`
- `getsonaro.com`

These are ideas only; availability, price, and trademark clearance have not been verified.

## Security notes
- Never put Razorpay `key_secret`, webhook secret, Supabase service-role key, or other private keys in browser code or variables prefixed with `NEXT_PUBLIC_`.
- Use `.env.local` locally and your hosting provider's encrypted environment-variable settings in production.
- Never trust a browser-only success message to mark a paid listing as active.
