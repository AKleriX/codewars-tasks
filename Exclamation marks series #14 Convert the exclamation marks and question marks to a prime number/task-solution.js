function convert(s) {
  let num = +s.replace(/(.)\1*/g, (m) => m.length);
  while (!isPrime(num)) {
    let p = 2;
    while (num % p) p++;
    num /= p;
  }
  return num;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
