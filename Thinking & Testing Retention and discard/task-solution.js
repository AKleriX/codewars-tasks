const testit = (n) =>
  Array.from({ length: n > 0 ? n : n }, (_, i) => i + 1).filter((v) => v % 2 && !(n % v));
