import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Malformed payload." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (
    !name ||
    name.length > 160 ||
    !email ||
    email.length > 254 ||
    !EMAIL_RE.test(email) ||
    !message
  ) {
    return NextResponse.json(
      { ok: false, error: "Missing or invalid fields." },
      { status: 400 }
    );
  }

  if (message.length > 4000 || subject.length > 400) {
    return NextResponse.json(
      { ok: false, error: "Length limit exceeded." },
      { status: 413 }
    );
  }

  console.log(
    "[contact] transmission",
    JSON.stringify({ name, email, subject, message })
  );

  return NextResponse.json(
    {
      ok: true,
      id: crypto.randomUUID(),
      note: "Transmission acknowledged.",
    },
    { status: 201 }
  );
}