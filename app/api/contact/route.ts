import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("[Contact form submission]", body);
    return NextResponse.json({ success: true, message: "Demo request received. We'll be in touch within one business day." });
  } catch {
    return NextResponse.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}
