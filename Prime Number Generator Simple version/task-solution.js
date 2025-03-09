const primeGen = (function* () {
  const primes = [];
  let num = 2;
  while (true) {
    if (primes.every((p) => num % p !== 0)) {
      primes.push(num);
      yield num;
    }
    num++;
  }
})();
