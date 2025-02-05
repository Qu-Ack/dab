import { integer, pgTable } from "drizzle-orm/pg-core";

export const transactions = pgTable("transactions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
});
