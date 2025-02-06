import { days, transactions } from "@/db/schema";

export default function Day(props: {
  transactions: (typeof transactions.$inferSelect)[];
  day: typeof days.$inferSelect;
}) {
  console.log(props);
}
