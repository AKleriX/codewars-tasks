export function containAllRots(str: string, arr: string[]): boolean {
  let allRots: string[] = [],
    dubStr: string = str + str;
  for (let i = 0; i < str.length; i++) allRots.push(dubStr.slice(i, i + str.length));
  return !allRots.filter((r) => !arr.includes(r)).length;
}
