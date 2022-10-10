export function arrayLeaders(numbers: number[]): number[] {
  let leaders: number[] = [];
  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] > numbers.slice(i + 1).reduce((s, n) => s + n, 0)) leaders.push(numbers[i]);
  return leaders;
}
