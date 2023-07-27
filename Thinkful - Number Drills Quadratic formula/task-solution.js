const quadraticFormula = (a, b, c) => {
  const d = b ** 2 - 4 * a * c;
  return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
};
