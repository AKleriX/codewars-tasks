const rocks = (n) => {
  let c = 0,
    start = 1,
    d = 1;

  while (start <= n) {
    let next = start * 10,
      end = Math.min(n + 1, next);
    c += (end - start) * d;
    start = next;
    d++;
  }

  return c;
};
