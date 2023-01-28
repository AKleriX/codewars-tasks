function leastLarger(a, i) {
  let n = a[i],
    minIdx = Infinity;
  for (let j = 0; j < a.length; j++)
    if (a[j] > n && (a[minIdx] > a[j] || minIdx === Infinity)) minIdx = j;
  return minIdx === Infinity ? -1 : minIdx;
}
