export function nextHappyYear(year: number): number {
  while (new Set((++year).toString()).size < year.toString().length);
  return year;
}
