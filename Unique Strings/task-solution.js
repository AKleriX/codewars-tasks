function uniqCount(xs) {
  let counter = {};
  for (let i = 0; i < xs.length; i++)
    counter[xs[i].toUpperCase()] = (counter[xs[i].toUpperCase()] || 0n) + 1n;
  return fact(BigInt(xs.length)) / Object.values(counter).reduce((mul, c) => mul * fact(c), 1n);
}

const fact = (n) => (n > 1n ? n * fact(n - 1n) : 1n);
