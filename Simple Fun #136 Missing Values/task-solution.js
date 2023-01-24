function missingValues(arr) {
  let res = 1,
    counter = arr.reduce((c, n) => ((c[n] = (c[n] || 0) + 1), c), {});
  for (let i in counter)
    if (counter[i] === 1) res *= i ** 2;
    else if (counter[i] === 2) res *= i;
  return res;
}
