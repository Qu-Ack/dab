import db from "@/db";
import { days } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  await db.insert(days).values({});

  return NextResponse.json({ status: "ok" });
}
