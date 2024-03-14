const smallest = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).reduce((m, v) => (m * v) / gcd(m, v), 1);

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
