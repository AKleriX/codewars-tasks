export function dateNbDays(a0: number, a: number, p: number): string {
  let date: Date = new Date('01-01-2016'),
    dayPer: number = 1 + p / 36000,
    dayCounter: number = 0;
  while (a0 < a) {
    dayCounter++;
    a0 *= dayPer;
  }
  date.setDate(date.getDate() + dayCounter);
  return date.toLocaleDateString('en-UK').split('/').reverse().join('-');
}
