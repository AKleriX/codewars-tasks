function multTriangle(n) {
  let totalSum = 0,
    evenSum = 0,
    oddSum = 0;
  for (let i = 1; i <= n; i++) {
    let sq = i ** 2;
    for (let j = i; j < sq; j += i) {
      totalSum += j * 2;
      if (!(j % 2)) evenSum += j * 2;
      else oddSum += j * 2;
    }
    totalSum += sq;
    if (!(sq % 2)) evenSum += sq;
    else oddSum += sq;
  }
  return [totalSum, evenSum, oddSum];
}
