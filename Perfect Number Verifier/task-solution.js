const isPerfect = (n) => {
  let divSum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) divSum += i + n / i;
  return n > 1 && divSum === n;
};
