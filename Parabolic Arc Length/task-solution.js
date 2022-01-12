function lenCurve(n) {
  let h = 1 / n,
      intervals = new Array(n).fill(h),
      fitArcLength = intervals.map((int, i) => Math.sqrt((i * int - (i + 1) * int)**2+((i * int)**2 - ((i + 1) * int)**2)**2))
                              .reduce((sum, int) => sum += int);
  fitArcLength = Math.trunc((fitArcLength * 10**9)) / 10**9 ;
  return fitArcLength;
}