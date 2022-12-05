export function average(scores: number[]): number {
  return Math.round(scores.reduce((s, n) => s + n) / scores.length);
}
