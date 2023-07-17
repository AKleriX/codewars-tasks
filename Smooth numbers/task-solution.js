function isSmooth(n) {
  const dict = {
    2: 'power of 2',
    3: '3-smooth',
    5: 'Hamming number',
    7: 'humble number',
  };
  let i;
  if (dict.hasOwnProperty(n)) return dict[n];
  for (i = (n / 2) | 0; !(n % i === 0 && isPrime(i)) && i > 0; i--);
  return dict.hasOwnProperty(i) ? dict[i] : 'non-smooth';
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
