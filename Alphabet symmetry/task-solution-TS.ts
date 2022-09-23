export function solve(arr: string[]): number[] {
  const abc: string = 'abcdefghijklmnopqrstuvwxyz';
  return arr.map((w) => [...w].filter((l, i) => i === abc.indexOf(l.toLowerCase())).length);
}
