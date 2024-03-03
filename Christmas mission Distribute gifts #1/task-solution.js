const distributeGifts = (wishes) =>
  wishes.reduce((s, g) => (g === 1 || isPrime(g) ? g : getBiggestFactor(g)) + s, 0);

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};

const getBiggestFactor = (n) => {
  let currentFactor = n - 1;
  while (n % currentFactor) currentFactor--;
  return currentFactor;
};
