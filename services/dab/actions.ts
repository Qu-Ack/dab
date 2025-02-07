"use server";

import { transactions } from "@/db/schema";
import { MUTATIONS } from "../data/mutations";

export async function handleSubmit(dayid: number, formData: FormData) {
  "use server";
  const formDataTransaction: typeof transactions.$inferInsert = {
    amount: Number(formData.get("amount") as string),
    spending_type: formData.get("expenseType") as "spent" | "earned",
    transaction_type: formData.get("transactionType") as
      | "food"
      | "shopping"
      | "transport"
      | "friends"
      | "other",
    description: formData.get("description") as string,
    dayId: dayid,
  };

  const transaction = await MUTATIONS.createTransaction(formDataTransaction);
  console.log(transaction);
}
