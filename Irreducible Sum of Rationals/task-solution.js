const gcd = (a, b) => b ? gcd(b, a % b) : a;

const sumFracts = (l) => {
  
  if (!l.length) return null;
  
  let [num, den] = l.reduce(([a, x], [b, y]) => [a * y + b * x, x * y]),
      mul = gcd(num, den);  
  
  return mul === den ? num / mul : [num / mul, den / mul];
}