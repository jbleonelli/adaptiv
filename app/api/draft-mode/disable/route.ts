import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  (await draftMode()).disable();
  const url = new URL(request.url);
  // Redirect back to where the user clicked "exit preview" from, falling
  // back to the home page if no `redirect` query is supplied.
  const redirectTo = url.searchParams.get("redirect") ?? "/";
  return NextResponse.redirect(new URL(redirectTo, url.origin));
}
