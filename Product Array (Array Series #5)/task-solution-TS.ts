export function productArray(nums: number[]): number[] {
  const prod: number = nums.reduce((mul, n) => mul * n);
  return nums.map((n) => prod / n);
}
