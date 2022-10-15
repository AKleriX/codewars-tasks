export const incrementer = (nums: number[]): number[] => nums.map((n, i) => (n + i + 1) % 10);
