export function unluckyDays(year: number): number {
  let date: Date = new Date(year, 0, 13),
    counter: number = 0;
  for (let i = 0; i < 12; i++) {
    date.setMonth(i);
    if (date.getDay() === 5) counter++;
  }
  return counter;
}
