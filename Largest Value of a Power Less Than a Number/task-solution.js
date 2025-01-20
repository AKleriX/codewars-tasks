const largestPower = (n) => {
  if (n <= 1) return [0, -1];
  if (n <= 4) return [1, -1];

  let maxPower = 0,
    count = 0;

  for (let a = 2; a < n; a++)
    for (let b = 2; ; b++) {
      const power = Math.pow(a, b);
      if (power >= n) break;
      if (power > maxPower) {
        maxPower = power;
        count = 1;
      } else if (power === maxPower) count++;
    }

  return [maxPower, count];
};
