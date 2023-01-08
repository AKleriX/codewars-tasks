export function oddOnesOut(nums: number[]) {
  let counter: { [key: string]: number } = nums.reduce(
    (c: { [key: string]: number }, n: number): { [key: string]: number } => (
      (c[n] = (c[n] || 0) + 1), c
    ),
    {},
  );
  return nums.filter((n) => !(counter[n] % 2));
}
