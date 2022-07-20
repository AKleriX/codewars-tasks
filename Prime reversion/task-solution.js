function solve(a, b) {
  let primes = [],
    counter = 0;
  for (let i = a; i < b; i++) if (isPrime(i)) primes.push(i);
  for (let i = 0; i < primes.length; i++)
    for (let j = i; j < primes.length; j++)
      if (isPrime([...(primes[i] * primes[j] + '')].reduce((sum, d) => sum + +d, 0))) counter++;
  return counter;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
