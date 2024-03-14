const roundAndRound = (n, a, b) => {
  let s = Math.sign(b);
  while (b) {
    b += -s;
    a = (a + s) % (n + 1);
    if (a <= 0 && s < 0) a = n;
    else if (a <= 0) a = 1;
  }
  return a;
};
