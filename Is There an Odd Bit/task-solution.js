function anyOdd(x) {
  let bits = x.toString(2);
  for (let i = bits.length - 1, c = 0; i >= 0; i--, c++)
    if (c % 2 === 1 && bits[i] === '1') return 1;
  return 0;
}
