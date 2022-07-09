function highestBiPrimeFac(p1, p2, n) {
  let k1 = 0,
    k2 = 0,
    max = null;
  for (let i = n; i > 0; i--) {
    let currentNum = i;
    while (!(currentNum % p1)) {
      k1++;
      currentNum /= p1;
    }
    while (!(currentNum % p2)) {
      k2++;
      currentNum /= p2;
    }
    if (currentNum === 1 && k1 && k2) {
      max = i;
      break;
    } else k1 = k2 = 0;
  }
  return [max, k1, k2];
}
