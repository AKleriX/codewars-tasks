const arithmeticSequenceElements = (a, d, n) =>
  Array.from({ length: n }, (_, i) => a + i * d).join(', ');
