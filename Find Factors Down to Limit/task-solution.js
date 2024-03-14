const factors = (integer, limit) =>
  Array.from({ length: integer - limit + 1 }, (_, i) => i + limit).filter((n) => !(integer % n));
