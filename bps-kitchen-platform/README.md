
# BP's Kitchen and Catering — starter platform

This is a starter codebase for:
- Expo / React Native customer app (iOS + Android)
- Next.js customer website and admin dashboard
- Supabase database schema and starter Row Level Security policies

**Important:** This is source code, not a published app or hosted website. It is not connected to live payments, email, or a production database until you create accounts, add credentials, deploy the services, and complete testing.

## Brand and product scope
Luxury black-and-gold brand. No individual restaurant food ordering.
Customers can browse and purchase meal-plan packages, submit catering inquiries, and request private-chef bookings. Admins can manage meal plans, inquiries, and bookings through the web dashboard.

## Requirements
- Node.js 20.9+
- npm
- Expo account for cloud mobile builds
- Supabase project for database and authentication
- Stripe account (or another supported payment provider) for online payments
- Apple Developer and Google Play developer accounts for store distribution

## Run the website
```bash
cd web
cp .env.example .env.local
npm install
npm run dev
```
Open http://localhost:3000

## Run the mobile app
```bash
cd mobile
cp .env.example .env
npm install
npx expo start
```
Scan the QR code with Expo Go for a development preview. For actual store builds, configure Expo Build / EAS:
```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform all
```
Store submission requires your Apple / Google developer accounts and store metadata.

## Supabase setup
1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`.
3. Add the project URL and anon key to each app's environment file.
4. Create an admin user in Supabase Auth, then set that user's profile role to `admin` using the Supabase dashboard.
5. Review and tighten policies before production.

## Payments
The starter checkout intentionally does **not** collect card details or pretend to process payments. Add a server-side payment integration (for example, Stripe PaymentIntents / Checkout) and verify payment webhooks before marking any order paid. Never put secret keys in a mobile app or browser bundle.

Meal plans are physical food services, so use an appropriate payment flow for physical goods/services rather than in-app digital-content purchases. Confirm the latest Apple and Google store rules before submission.

## Production checklist
- Configure real business contact details, service area, pricing, menus, allergens, and fulfillment rules.
- Add privacy policy, terms, refund/cancellation policy, food-safety/allergen disclosures, and accessibility review.
- Implement server-side payment creation, webhook verification, email/SMS notifications, and admin authorization.
- Test order lifecycle, taxes, delivery fees, refunds, and data access.
- Add app icons, splash screens, screenshots, store descriptions, and legal business details.
- Build signed iOS and Android binaries and submit for review.

## Project layout
- `mobile/` Expo app
- `web/` Next.js website + admin dashboard
- `supabase/schema.sql` database starter

## Confirmed business details
- Brand: BP's Kitchen and Catering
- Phone: 201-388-3236
- Service area: New Jersey and New York
- Preferred domain: bpskitchen.com (availability and registration not confirmed)
- Business email: not supplied; add a verified business email before launch.

The website and mobile app include the confirmed phone and service area. Sample meal-plan prices remain placeholders and must be replaced with approved business pricing.
