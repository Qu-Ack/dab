export function calculateDAB(previous_dab: number) {}

export function calculateDailyLimit(
  monthly_funds: number,
  expected_savings: number,
) {
  const days = new Date(getCurrentYear(), getCurrentMonth(), 0).getDate();
  let daily_limit = (monthly_funds - expected_savings) / days;
  return daily_limit;
}

export function getCurrentYear() {
  return new Date().getFullYear();
}
export function getCurrentMonth() {
  return new Date().getMonth();
}
