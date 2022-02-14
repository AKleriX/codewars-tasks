export function getAverage(marks:number[]):number{
  return Math.floor(marks.reduce((sum, n) => sum + n) / marks.length);
}