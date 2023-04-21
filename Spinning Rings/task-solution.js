function spinningRings(innerMax, outerMax) {
  let currentInner = innerMax,
    currentOuter = 1,
    counter = 1;
  while (currentInner !== currentOuter) {
    counter++;
    currentOuter = currentOuter === outerMax ? 0 : currentOuter + 1;
    currentInner = currentInner === 0 ? innerMax : currentInner - 1;
  }
  return counter;
}
