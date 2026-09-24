import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_RE = /[\u0000-\u001f\u007f]/g;

const MAX_BODY_BYTES = 16 * 1024;
const NAME_MAX = 160;
const NAME_MIN = 2;
const SUBJECT_MAX = 400;
const MESSAGE_MAX = 4000;
const MESSAGE_MIN = 10;
const EMAIL_MAX = 254;

const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 8;

type RateEntry = { count: number; resetAt: number };

const rateStore = new Map<string, RateEntry>();

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

function ipFingerprint(ip: string): string {
  return createHash("sha256").update(ip).digest("hex").slice(0, 16);
}

function isRateLimited(ip: string): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  if (rateStore.size > 1000) {
    for (const [key, entry] of rateStore) {
      if (entry.resetAt <= now) rateStore.delete(key);
    }
  }
  const entry = rateStore.get(ip);
  if (!entry || entry.resetAt <= now) {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { limited: false, retryAfter: 0 };
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT) {
    const retryAfter = Math.max(
      1,
      Math.ceil((entry.resetAt - now) / 1000)
    );
    return { limited: true, retryAfter };
  }
  return { limited: false, retryAfter: 0 };
}

function isSameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  const host = req.headers.get("host");
  if (!host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function sanitize(value: string): string {
  return value.replace(CONTROL_RE, " ").trim();
}

function json(
  payload: Record<string, unknown>,
  status: number,
  extraHeaders?: Record<string, string>
): NextResponse {
  return NextResponse.json(payload, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8",
      ...extraHeaders,
    },
  });
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  const fingerprint = ipFingerprint(ip);

  if (!isSameOrigin(req)) {
    console.log(`[contact] blocked-cross-origin ${fingerprint}`);
    return json({ ok: false, error: "Request origin rejected." }, 403);
  }

  const reflected = req.headers.get("content-type") ?? "";
  if (!reflected.toLowerCase().includes("application/json")) {
    console.log(`[contact] blocked-content-type ${fingerprint}`);
    return json({ ok: false, error: "Unsupported media type." }, 415);
  }

  const length = Number(req.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES || !Number.isFinite(length)) {
    console.log(`[contact] rejected-size ${fingerprint}`);
    return json({ ok: false, error: "Payload too large." }, 413);
  }

  const { limited, retryAfter } = isRateLimited(ip);
  if (limited) {
    console.log(`[contact] rate-limited ${fingerprint}`);
    return json(
      { ok: false, error: "Too many requests. Please wait and try again." },
      429,
      { "Retry-After": String(retryAfter) }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "Malformed payload." }, 400);
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return json({ ok: false, error: "Malformed payload." }, 400);
  }

  const fields = body as Body;

  const website = sanitize(typeof fields.website === "string" ? fields.website : "");
  if (website !== "") {
    console.log(`[contact] honeypot-hit ${fingerprint}`);
    return json(
      {
        ok: true,
        id: crypto.randomUUID(),
        note: "Transmission acknowledged.",
      },
      201
    );
  }

  const name = sanitize(typeof fields.name === "string" ? fields.name : "");
  const email = sanitize(typeof fields.email === "string" ? fields.email : "");
  const subject = sanitize(typeof fields.subject === "string" ? fields.subject : "");
  const message = sanitize(typeof fields.message === "string" ? fields.message : "");

  if (
    name.length < NAME_MIN ||
    name.length > NAME_MAX ||
    email.length === 0 ||
    email.length > EMAIL_MAX ||
    !EMAIL_RE.test(email) ||
    message.length < MESSAGE_MIN ||
    message.length > MESSAGE_MAX
  ) {
    console.log(`[contact] invalid-fields ${fingerprint}`);
    return json({ ok: false, error: "Missing or invalid fields." }, 400);
  }

  if (subject.length > SUBJECT_MAX) {
    return json({ ok: false, error: "Length limit exceeded." }, 413);
  }

  const surplus = JSON.stringify(fields).length - MAX_BODY_BYTES;
  if (surplus > 0) {
    return json({ ok: false, error: "Payload too large." }, 413);
  }

  const id = crypto.randomUUID();
  console.log(`[contact] accepted ${fingerprint} id=${id}`);

  return json(
    {
      ok: true,
      id,
      note: "Transmission acknowledged.",
    },
    201
  );
}