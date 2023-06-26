export function choreAssignment(chores: number[]): number[] {
  let sortedArr: number[] = [...chores].sort((a, b) => a - b),
    res: number[] = [];
  for (let i = 0; i < sortedArr.length / 2; i++)
    res.push(sortedArr[i] + sortedArr[sortedArr.length - 1 - i]);
  return res.sort((a, b) => a - b);
}
