const alternate = (n, firstValue, secondValue) =>
  Array.from({ length: n }, (_, i) => (i % 2 ? secondValue : firstValue));
