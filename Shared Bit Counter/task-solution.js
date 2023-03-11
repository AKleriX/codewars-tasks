function sharedBits(a, b) {
  let bitA = [...a.toString(2)].reverse(),
    bitB = [...b.toString(2)].reverse();
  return bitA.reduce((c, bit, i) => (bit + bitB[i] === '11' ? c + 1 : c), 0) > 1;
}
