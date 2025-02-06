function formatDate(
  date: Date,
  timeZone: string = "Asia/Kolkata",
  locale: string = "en-IN",
): string {
  // No null return, handle outside
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: timeZone,
  };
  return date.toLocaleDateString(locale, options);
}

function formatTime(
  date: Date,
  timeZone: string = "Asia/Kolkata",
  locale: string = "en-IN",
): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric", // Optional
    timeZone: timeZone,
    hour12: false, // 24-hour format
  };
  return date.toLocaleTimeString(locale, options);
}

function getDayOfWeek(
  date: Date,
  timeZone: string = "Asia/Kolkata",
  locale: string = "en-IN",
): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    timeZone: timeZone,
  };
  return date.toLocaleDateString(locale, options);
}

function getDayOfMonth(date: Date, timeZone: string = "Asia/Kolkata"): number {
  return date.getDate();
}

function getMonth(
  date: Date,
  timeZone: string = "Asia/Kolkata",
  locale: string = "en-IN",
): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    timeZone: timeZone,
  };
  return date.toLocaleDateString(locale, options);
}

function getYear(date: Date, timeZone: string = "Asia/Kolkata"): number {
  return date.getFullYear();
}

export { getYear, formatDate, formatTime, getDayOfWeek, getDayOfMonth };
