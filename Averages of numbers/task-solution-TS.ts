export const averages = (numbers: number[] | null): number[] =>
  !numbers ? [] : numbers.map((n, i, arr) => (n + arr[i - 1]) / 2).slice(1);
