"use client";
import { days, transactions } from "@/db/schema";
import { handleSubmit } from "@/services/dab/actions";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

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
  }, [props.day.created_at]);

  return (
    <div className="min-h-screen w-[60%]">
      <div className="mx-auto px-4 py-8 w-full">
        <div className="flex gap-8">
          {currentDay && (
            <div className="w-full max-w-md flex-shrink-0">
              <TransactionAdditionForm dayid={props.day.id} />
            </div>
          )}
          <div
            className={`w-full ${currentDay ? "max-w-3xl" : "max-w-5xl mx-auto"}`}
          >
            <Transactions transactions={props.transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Transactions(props: {
  transactions: (typeof transactions.$inferInsert)[];
}) {
  return (
    <div className="space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
      {props.transactions.map((transaction, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Amount</p>
              <p className="text-xl font-semibold text-gray-900">
                ₹{transaction.amount.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Type</p>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  transaction.spending_type === "earned"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {transaction.spending_type}
              </span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-sm text-gray-500 mb-1">Description</p>
              <p className="text-gray-700">{transaction.description}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Category</p>
              <p className="capitalize text-gray-700">
                {transaction.transaction_type}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TransactionAdditionForm(props: { dayid: number }) {
  const updatedHandleSubmit = handleSubmit.bind(null, props.dayid!);

  return (
    <form
      action={updatedHandleSubmit}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6 sticky top-8"
    >
      <div>
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Amount
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
          placeholder="Enter amount"
          step="0.01"
          required
        />
      </div>

      <div>
        <label
          htmlFor="expenseType"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Transaction Type
        </label>
        <select
          name="expenseType"
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900"
          required
        >
          <option value="spent">Spent</option>
          <option value="earned">Earned</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 min-h-[100px] resize-none"
          placeholder="Enter the description"
          required
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="transactionType"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Category
        </label>
        <select
          name="transactionType"
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900"
          required
        >
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
          <option value="friends">Friends</option>
          <option value="other">Other</option>
        </select>
      </div>
      <SubmitButton />
    </form>
  );
}
export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`
        w-full relative
        bg-purple-600 text-white 
        py-3 px-4 rounded-lg 
        font-medium
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
        disabled:cursor-not-allowed
        ${pending ? "bg-purple-500 hover:bg-purple-500" : "hover:bg-purple-700"}
      `}
    >
      <span
        className={`
        inline-flex items-center
        ${pending ? "opacity-0" : "opacity-100"}
        transition-opacity duration-200
      `}
      >
        Add Transaction
      </span>

      {pending && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
    </button>
  );
}
