export const startSmoking = (bars: number, boxes: number): number => {
  let c: number = bars * 10 * 18 + boxes * 18,
    ends: number = bars * 10 * 18 + boxes * 18;
  while (ends >= 5) {
    let r: number = ends % 5,
      nC: number = (ends / 5) | 0;
    ends = r + nC;
    c += nC;
  }
  return c;
};
