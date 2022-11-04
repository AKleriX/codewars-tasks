export function minimumSteps(nums: number[], value: number): number {
  let sortArr: number[] = [...nums].sort((a, b) => a - b),
    steps: number = 0,
    sum: number = sortArr[0];
  while (sum < value) {
    steps++;
    sum += sortArr[steps];
  }
  return steps;
}
