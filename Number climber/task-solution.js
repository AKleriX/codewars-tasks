function climb(n) {
  let seq = [n];
  while (n > 1) seq.unshift((n = Math.floor(n / 2)));
  return seq;
}
