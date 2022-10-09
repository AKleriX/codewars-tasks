export function nthSmallest(arr: number[], pos: number) {
  return [...arr]
    .sort((a, b) => a - b)
    .slice(0, pos)
    .pop();
}
