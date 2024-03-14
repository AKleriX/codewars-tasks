const horses = (n) =>
  n % 1 || typeof n !== 'number' ? undefined : n < 3 ? n : fact(n) / fact(n - 3);

const fact = (n) => (n < 2 ? 1 : n * fact(n - 1));
