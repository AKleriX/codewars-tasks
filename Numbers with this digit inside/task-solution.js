function numbersWithDigitInside(x, d) {
  let numsArr = Array.from({ length: x }, (_, i) => i + 1).filter((n) =>
    new RegExp(d).test(n.toString()),
  );
  return [
    numsArr.length,
    numsArr.reduce((s, n) => s + n, 0),
    numsArr.reduce((p, n) => (p || 1) * n, 0),
  ];
}
