function modifiedSum(a, n) {
  let powSum = 0,
    sum = 0;
  for (let i = 0; i < a.length; i++) {
    powSum += a[i] ** n;
    sum += a[i];
  }
  return powSum - sum;
}
