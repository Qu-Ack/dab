import db from "@/db";
import { days, transactions } from "@/db/schema";
import { eq } from "drizzle-orm";

export const QUERIES = {
  getDay: (dayid: number) => {
    return db.select().from(days).where(eq(days.id, dayid));
  },

  getTransactionsForADay: (dayid: number) => {
    return db.select().from(transactions).where(eq(transactions.dayId, dayid));
  },

  getDays: () => {
    return db.select().from(days);
  },
};
