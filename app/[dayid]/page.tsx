import Day from "@/components/Day";
import { QUERIES } from "@/services/data/queries";

export default async function DayPage({
  params,
}: {
  params: Promise<{ dayid: string }>;
}) {
  const dayid = (await params).dayid;

  const parsedDayId = Number(dayid);

  if (isNaN(parsedDayId)) {
    throw Error("dayid is not a number");
  }

  const dayPromise = QUERIES.getDay(parsedDayId);
  const transactionsPromise = QUERIES.getTransactionsForADay(parsedDayId);

  const [day, transactions] = await Promise.all([
    dayPromise,
    transactionsPromise,
  ]);

  return <Day day={day[0]} transactions={transactions}></Day>;
}
