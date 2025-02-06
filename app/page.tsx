"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  function handleSubmit() {}

  return (
    <div className="min-h-screen bg-gray-900 text-cyan-300 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-cyan-500 mb-6">
          <div className="flex justify-between items-center text-sm">
            <div className="text-center">
              <p className="text-cyan-500 font-semibold">Daily Budget</p>
              <p className="text-2xl font-bold text-pink-500">${300}</p>
            </div>
            <div className="text-center">
              <p className="text-cyan-500 font-semibold">Savings Target</p>
              <p className="text-2xl font-bold text-green-500">${300}</p>
            </div>
            <div className="text-center">
              <p className="text-cyan-500 font-semibold">Month</p>
              <p className="text-2xl font-bold text-purple-500">
                {"January 2025"}
              </p>
            </div>
          </div>
        </div>

        <Card className="bg-gray-800 border border-cyan-500">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-cyan-300">
                  Amount
                </Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  required
                  className="bg-gray-700 border-cyan-500 text-cyan-300 placeholder-cyan-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="spendingType" className="text-cyan-300">
                  Spending Type
                </Label>
                <Select>
                  <SelectTrigger className="bg-gray-700 border-cyan-500 text-cyan-300">
                    <SelectValue placeholder="Select spending type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-cyan-500 text-cyan-300">
                    <SelectItem value="spent">Spent</SelectItem>
                    <SelectItem value="earned">Earned</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-cyan-300">
                  Description
                </Label>
                <Input
                  id="description"
                  placeholder="Enter description"
                  className="bg-gray-700 border-cyan-500 text-cyan-300 placeholder-cyan-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="transactionType" className="text-cyan-300">
                  Transaction Type
                </Label>
                <Select>
                  <SelectTrigger className="bg-gray-700 border-cyan-500 text-cyan-300">
                    <SelectValue placeholder="Select transaction type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-cyan-500 text-cyan-300">
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="shopping">Shopping</SelectItem>
                    <SelectItem value="transport">Transport</SelectItem>
                    <SelectItem value="friends">Friends</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold"
              >
                Add Transaction
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
