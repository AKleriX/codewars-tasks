export function newAvg(arr: number[], newavg: number): number {
  let newDon: number = (arr.length + 1) * newavg - arr.reduce((s, n) => s + n, 0);
  if (newDon < 0) throw new Error('Expected New Average is too low');
  return Math.ceil(newDon);
}