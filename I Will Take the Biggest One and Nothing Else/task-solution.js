const maxIntChain = (n) =>
  n < 5 ? -1 : n % 2 ? Math.floor(n / 2) * Math.ceil(n / 2) : (n / 2 + 1) * (n / 2 - 1);
