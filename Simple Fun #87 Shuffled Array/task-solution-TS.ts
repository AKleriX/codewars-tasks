export function shuffledArray(shuffled: number[]): number[] {
  let sum: number = shuffled.reduce((s, n) => s + n, 0),
    arr: number[] = [...shuffled];
  for (let i = 0; i < arr.length; i++)
    if (sum - arr[i] === arr[i]) {
      arr.splice(i, 1);
      break;
    }
  return arr.sort((a, b) => a - b);
}
