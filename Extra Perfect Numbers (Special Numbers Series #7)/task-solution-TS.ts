export function extraPerfect(n: number) {
  let arr: number[] = [];
  for (let i = 1; i <= n; i += 2) arr.push(i);
  return arr;
}
