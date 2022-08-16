function multPrimefactorSum(a, b) {
  let nums = [];
  for (let i = a; i <= b; i++)
    if (!isPrime(i)) {
      let primeSum = 0,
        num = i;
      for (let j = 2; num > 1; j++)
        while (!(num % j)) {
          num /= j;
          primeSum += j;
        }
      if (!(i % primeSum)) nums.push(i);
    }
  return nums;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
