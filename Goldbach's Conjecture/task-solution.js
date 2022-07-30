// Checks Goldbach's conjecture for the given argument
const checkGoldbach = function (number) {
  if (number <= 2 || number % 2) return [];
  let pair = [];
  for (let i = 2; i <= number / 2; i++)
    if (isPrime(i) && isPrime(number - i)) {
      pair = [i, number - i];
      break;
    }
  return pair;
};

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
