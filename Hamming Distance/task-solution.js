const hamming = (a, b) =>
  [...a].reduce((notMatchCounter, s, i) => notMatchCounter + (s !== b[i] ? 1 : 0), 0);
