const seqToOne = (n) =>
  Array.from({ length: Math.abs(1 - n) + 1 }, (_, i) => n - i * (n <= 0 ? -1 : 1));
