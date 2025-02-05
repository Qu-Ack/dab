import db from "@/db";
import { days } from "@/db/schema";

export default async function GET() {
  await db.insert(days).values({});
}
