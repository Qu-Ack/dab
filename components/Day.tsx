"use client";
import { days, transactions } from "@/db/schema";
import { useEffect, useState } from "react";

export default function Day(props: {
  transactions: (typeof transactions.$inferSelect)[];
  day: typeof days.$inferSelect;
}) {
  const [currentDay, setCurrentDay] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    if (
      props.day.created_at.getDay() === currentDate.getDay() &&
      props.day.created_at.getMonth() === currentDate.getMonth() &&
      props.day.created_at.getFullYear() === currentDate.getFullYear()
    ) {
      setCurrentDay(true);
    }
  }, []);

  if (currentDay) {
    return <div>Current Day</div>;
  }

  return <div>Not the current day</div>;
}
