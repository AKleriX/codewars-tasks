const videoPart = (part, total) => {
  const watched = parseTime(part),
    duration = parseTime(total);
  return simplifyFraction(watched, duration);
};

const parseTime = (time) => {
  const [h, m, s] = time.split(':').map(Number);
  return h * 3600 + m * 60 + s;
};

const simplifyFraction = (a, b) => {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y)),
    divisor = gcd(a, b);
  return [a / divisor, b / divisor];
};
