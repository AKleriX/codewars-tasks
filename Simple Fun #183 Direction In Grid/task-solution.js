const directionInGrid = (n, m) => {
  let cels = n * m - m;
  if (cels === 0) return 'R';

  let directions = ['D', 'L', 'U', 'R'];
  for (let i = 0; ; i++) {
    if (i % 2 === 0) {
      n -= 1;
      cels -= n;
    } else {
      m -= 1;
      cels -= m;
    }
    if (cels === 0) return directions[i % 4];
  }
};
