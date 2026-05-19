# Snapexif — Website

The marketing site + license-verification API for [SnapExif](https://snapexif.com).

## Stack
- Next.js 16 App Router · TypeScript · Tailwind CSS v4
- Deployed to Vercel
- License server proxy: `/api/license/verify` → Dodo Payments

## Local dev

```sh
npm install
npm run dev
```

Then visit http://localhost:3000.

## Environment variables (set in Vercel)

| Variable | Description |
|----------|-------------|
| `DODO_API_KEY` | Live API key from Dodo dashboard |
| `DODO_PRODUCT_ID` | `pdt_0NfBt7eUi120qMFvjJLCu` (default) |
| `DODO_API_BASE` | Override Dodo API base URL (optional) |
| `NEXT_PUBLIC_DODO_CHECKOUT_URL` | Optional explicit buy link |

## License verify API

`POST /api/license/verify`

```json
{ "licenseKey": "DODO-XXXX-XXXX", "instanceId": "<machine-uuid>" }
```

Response (success):
```json
{ "ok": true, "status": "active", "email": "user@example.com", "productId": "pdt_..." }
```

The macOS app calls this from its License preference pane and persists the result
into Keychain.
