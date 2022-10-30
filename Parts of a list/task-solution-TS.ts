export function partlist(arr: string[]): string[][] {
  let resArr: string[][] = [];
  for (let i = 1; i < arr.length; i++)
    resArr.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
  return resArr;
}
