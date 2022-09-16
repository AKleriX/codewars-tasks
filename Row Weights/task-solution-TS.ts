export function rowWeights(arr: number[]): number[] {
  return arr.reduce((rooms, n, i) => ((rooms[i % 2] += n), rooms), [0, 0]);
}
