function faultyOdometer(n) {
  let strN = n.toString(),
    sum = 0,
    mul = 1;
  for (let i = strN.length - 1; i >= 0; i--) {
    let digit = Number(strN[i]);
    if (digit > 4) digit--;
    sum += digit * mul;
    mul *= 9;
  }
  return sum;
}
