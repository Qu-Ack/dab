import { integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const spendingType = pgEnum("spending_type", ["spent", "earned"]);
export const transactionType = pgEnum("transaction_type", [
  "food",
  "shopping",
  "transport",
  "friends",
  "other",
]);
export const days = pgTable("days", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  created_at: timestamp({ withTimezone: true }).defaultNow().notNull(),
});

export const transactions = pgTable("transactions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  amount: integer().notNull(),
  spending_type: spendingType().notNull(),
  created_at: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updated_at: timestamp({ withTimezone: true }),
  description: text().notNull(),
  transaction_type: transactionType().notNull(),
  dayId: integer("dayId").references(() => days.id),
});
