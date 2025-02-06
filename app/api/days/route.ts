import db from "@/db";
import { days } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  if (
    req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ status: "unauthorized" });
  }

  await db.insert(days).values({});

  return NextResponse.json({ status: "ok" });
}
