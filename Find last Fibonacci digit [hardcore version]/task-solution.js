function lastFibDigit(n) {
  let minNum = n % 60,
    fibs = [0, 1, 1];
  for (let i = 3; i <= minNum; i++) fibs.push((fibs[i - 1] + fibs[i - 2]) % 10);
  return fibs[minNum];
}
