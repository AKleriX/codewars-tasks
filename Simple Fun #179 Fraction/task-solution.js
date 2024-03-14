const fraction = (a, b) => a / gcd(a, b) + b / gcd(a, b);

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
