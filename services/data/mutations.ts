import db from "@/db";
import { days, transactions } from "@/db/schema";
export const MUTATIONS = {
  createDay: (value: typeof days.$inferInsert) => {
    return db.insert(days).values(value);
  },
  createTransaction: (value: typeof transactions.$inferInsert) => {
    return db.insert(transactions).values(value);
  },
};
