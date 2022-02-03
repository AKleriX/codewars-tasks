export function sumPairs(ints: number[], s: number): [number, number] | void {  
  let lastNums: Set<number> = new Set<number>();
  for (let i = 0; i < ints.length; i++)
    if (lastNums.has(s - ints[i])) return [s - ints[i], ints[i]];
    else lastNums.add(ints[i]);
}