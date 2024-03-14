const relativelyPrime = (n, l) => l.filter((v) => gcd(n, v) === 1);

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
