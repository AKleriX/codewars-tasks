const sumOfThrees = (n) => {
  const p = [];
  let power = 1,
    exp = 0;

  while (n > 0) {
    if (n % 3 === 1) p.push(`3^${exp}`);
    else if (n % 3 === 2) return 'Impossible';
    n = Math.floor(n / 3);
    exp++;
  }

  return p.length ? p.reverse().join('+') : 'Impossible';
};
