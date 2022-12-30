function dominator(arr) {
  let counter = arr.reduce((c, n) => ((c[n] = (c[n] || 0) + 1), c), {});
  for (let i in counter) if (counter[i] > arr.length / 2) return +i;
  return -1;
}
