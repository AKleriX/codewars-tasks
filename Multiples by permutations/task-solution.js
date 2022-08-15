function search_permMult(nMax, k) {
  let counter = 0;
  for (let i = 1000; i * k <= nMax; i++)
    if ([...i.toString()].sort().join('') === [...(i * k).toString()].sort().join('')) counter++;
  return counter;
}
