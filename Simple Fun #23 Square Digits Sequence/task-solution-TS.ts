export function squareDigitsSequence(a: number): number {
  let numsCounter: Set<number> = new Set<number>(),
      lastEl:number = a;
  while (!numsCounter.has(lastEl)){
    numsCounter.add(lastEl);
    lastEl = lastEl.toString().split('').reduce((sumSqr, d) => Number(d)**2 + sumSqr, 0);
  } 
  return numsCounter.size + 1;
}