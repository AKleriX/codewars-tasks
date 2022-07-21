function onlyOddDigPrimes(n) {
  let counter = [0, 0, 0];
  for (let i = 3; i <= n; i++)
    if (isPrime(i) && isOddNums(i)) {
      counter[0]++;
      counter[1] = i < n ? i : counter[1];
    }
  while (!isPrime(++n) || !isOddNums(n));
  counter[2] = n;
  return counter;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};

const isOddNums = (n) => [...n.toString()].every((d) => +d % 2);
