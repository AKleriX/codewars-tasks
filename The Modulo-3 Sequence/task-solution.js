const sequence = (n) =>
  n % 8 === 0 ? 1 : n % 8 === 1 ? 0 : (sequence((n % 8) - 1) + sequence((n % 8) - 2)) % 3;
