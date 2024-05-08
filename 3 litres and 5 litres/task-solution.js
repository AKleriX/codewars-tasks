const canIMeasure = (a, b, c) => c <= Math.max(a, b) && !(c % gcd(a, b));
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
