import { NextRequest, NextResponse } from "next/server";

// Dodo Payments license-key validation proxy.
//
// The macOS app POSTs { licenseKey } to this route. We forward to Dodo's
// license verification endpoint using a server-side API key, never exposing
// the key to the client. Returns a small JSON envelope the app can persist.
//
// Required environment variables (set in Vercel Project → Settings → Env):
//   DODO_API_KEY               Live API key from Dodo dashboard
//   DODO_PRODUCT_ID            pdt_0NfBt7eUi120qMFvjJLCu
//   DODO_API_BASE              (optional) override, default https://api.dodopayments.com

const PRODUCT_ID =
  process.env.DODO_PRODUCT_ID || "pdt_0NfBt7eUi120qMFvjJLCu";
const API_BASE = process.env.DODO_API_BASE || "https://api.dodopayments.com";
const API_KEY = process.env.DODO_API_KEY;

export const runtime = "nodejs";

type VerifyResult =
  | { ok: true; status: "active" | "trial"; email?: string; expiresAt?: string; productId: string }
  | { ok: false; status: "invalid" | "expired" | "unknown_error"; message: string };

export async function POST(req: NextRequest) {
  let body: { licenseKey?: string; instanceId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, status: "invalid", message: "Invalid JSON body" } satisfies VerifyResult,
      { status: 400 }
    );
  }

  const key = (body.licenseKey ?? "").trim();
  if (!key) {
    return NextResponse.json(
      { ok: false, status: "invalid", message: "Missing licenseKey" } satisfies VerifyResult,
      { status: 400 }
    );
  }

  if (!API_KEY) {
    // Allow the route to compile + deploy even before secrets are set; surface a clear error.
    return NextResponse.json(
      { ok: false, status: "unknown_error", message: "DODO_API_KEY not configured" } satisfies VerifyResult,
      { status: 503 }
    );
  }

  try {
    const r = await fetch(`${API_BASE}/licenses/activate`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        license_key: key,
        product_id: PRODUCT_ID,
        instance_id: body.instanceId,
      }),
      cache: "no-store",
    });

    const data: Record<string, unknown> = await r.json().catch(() => ({}));

    if (!r.ok) {
      const message = typeof data.message === "string" ? data.message : `HTTP ${r.status}`;
      const status: VerifyResult["status"] = r.status === 404 ? "invalid" : r.status === 410 ? "expired" : "unknown_error";
      return NextResponse.json(
        { ok: false, status, message } satisfies VerifyResult,
        { status: r.status >= 500 ? 502 : r.status }
      );
    }

    return NextResponse.json({
      ok: true,
      status: (data.status as "active" | "trial") ?? "active",
      email: typeof data.customer_email === "string" ? data.customer_email : undefined,
      expiresAt: typeof data.expires_at === "string" ? data.expires_at : undefined,
      productId: PRODUCT_ID,
    } satisfies VerifyResult);
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        status: "unknown_error",
        message: err instanceof Error ? err.message : "Network error",
      } satisfies VerifyResult,
      { status: 502 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: "snapexif.license.verify",
    method: "POST",
    body: { licenseKey: "string", instanceId: "string?" },
    productId: PRODUCT_ID,
  });
}
