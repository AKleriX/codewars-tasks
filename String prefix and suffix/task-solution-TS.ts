export function solve(s: string) {
  let maxLength: number = 0,
    idx: number = Math.floor(s.length / 2);
  while (!maxLength && idx > 0) if (s.endsWith(s.slice(0, idx--))) maxLength = ++idx;
  return maxLength;
}
