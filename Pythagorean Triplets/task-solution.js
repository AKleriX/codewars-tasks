const pythagoreanTriplet = (n) => {
  const f = [];
  for (let i = 1; i <= Math.sqrt(n); i++)
    if (n % i === 0) {
      f.push(i);
      if (i !== n / i) f.push(n / i);
    }
  for (let j = 0; j < f.length; j++)
    for (let k = j; k < f.length; k++) {
      const a = f[j],
        b = f[k],
        c = Math.sqrt(a * a + b * b);
      if (c % 1 === 0 && a * b * c === n) return [a, b, c];
    }
  return null;
};
