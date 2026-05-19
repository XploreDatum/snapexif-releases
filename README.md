# Snapexif — Website

Marketing site for [SnapExif](https://snapexif.com).

## Stack
- Next.js 16 App Router · TypeScript · Tailwind CSS v4
- Deployed to Vercel

## Local dev

```sh
npm install
npm run dev
```

Then visit http://localhost:3000.

## How licensing works

SnapExif uses **Dodo Payments' public license endpoints** — the macOS app talks
to Dodo directly. No proxy, no server-side API key, no secret to leak.

- Activation: `POST https://live.dodopayments.com/licenses/activate`
  Body: `{ "license_key": "...", "name": "<device name>" }` → `{ "id": "<instance_id>", ... }`
- Validation: `POST https://live.dodopayments.com/licenses/validate`
  Body: `{ "license_key": "..." }` → `{ "valid": true|false, ... }`
- Deactivation: `POST https://live.dodopayments.com/licenses/deactivate`
  Body: `{ "license_key": "...", "license_key_instance_id": "..." }`

The site itself only needs to be a landing page + a `/success` page. Dodo's
checkout redirects buyers there with `?key=…&email=…` query params after a
successful purchase, and the macOS app's License sheet handles activation
client-side.

## Environment variables

None required for the public site. If you want a custom Dodo "buy link"
instead of the default `checkout.dodopayments.com/buy/<id>`, set:

```
NEXT_PUBLIC_DODO_CHECKOUT_URL=<your-custom-checkout-link>
```
