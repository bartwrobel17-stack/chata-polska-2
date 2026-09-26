import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";

const ADMIN_PASSWORD = "Agulatko79@";

function token() {
  return createHmac("sha256", ADMIN_PASSWORD)
    .update("chata-polska-admin")
    .digest("hex");
}

export async function POST(req: Request) {
  const { password } = await req.json().catch(() => ({ password: "" }));

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });

  response.cookies.set("admin_session", token(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 2592000,
  });

  return response;
}
