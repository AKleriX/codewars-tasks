const startSmoking = (bars, boxes) => {
  let c = bars * 10 * 18 + boxes * 18,
    ends = bars * 10 * 18 + boxes * 18;
  while (ends >= 5) {
    let r = ends % 5,
      nC = (ends / 5) | 0;
    ends = r + nC;
    c += nC;
  }
  return c;
};
