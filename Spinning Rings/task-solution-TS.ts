export function spinningRings(innerMax: number, outerMax: number): number {
  let currentInner: number = innerMax,
    currentOuter: number = 1,
    counter: number = 1;
  while (currentInner !== currentOuter) {
    counter++;
    currentOuter = currentOuter === outerMax ? 0 : currentOuter + 1;
    currentInner = currentInner === 0 ? innerMax : currentInner - 1;
  }
  return counter;
}
