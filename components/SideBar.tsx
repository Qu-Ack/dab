"use client";
import React, { useState } from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import {
  formatDate,
  formatTime,
  getDayOfWeek,
} from "@/services/dab/dateHelpers";
import { days } from "@/db/schema";

export default function SideBar(props: { days: (typeof days.$inferSelect)[] }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const renderSidebarContent = () => (
    <>
      <div className="flex items-center gap-2 mb-6">
        <CalendarDays className="w-6 h-6 text-purple-600" />
        <h1 className="text-xl font-semibold text-gray-800">Days</h1>
      </div>
      <ul className="space-y-4">
        {props.days.map((day) => (
          <li
            key={day.id}
            className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 cursor-pointer border border-gray-100 hover:border-purple-200"
          >
            <p className="text-sm font-medium text-purple-600 mb-1">
              Day {day.id}
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <p className="flex items-center gap-2">
                <span className="font-medium">
                  {formatDate(day.created_at)}
                </span>
                <span className="text-gray-400">•</span>
                <span>{formatTime(day.created_at)}</span>
              </p>
              <p className="text-gray-500">{getDayOfWeek(day.created_at)}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      <button
        onClick={toggleMobileSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-purple-100 rounded-md"
      >
        {isMobileSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      <div className="hidden md:block w-[20%] bg-white border-r border-gray-200 p-6 shadow-lg h-full">
        {renderSidebarContent()}
      </div>

      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-white overflow-y-auto"
          onClick={toggleMobileSidebar}
        >
          <div
            className="p-6 w-[80%] bg-white h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {renderSidebarContent()}
          </div>
        </div>
      )}
    </>
  );
}
