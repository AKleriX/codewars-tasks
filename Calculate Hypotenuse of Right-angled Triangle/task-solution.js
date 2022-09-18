function calculateHypotenuse(a, b) {
  if (a <= 0 || b <= 0 || typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b))
    throw new Error('invalid input');
  return Math.round(Math.sqrt(a ** 2 + b ** 2) * 1000) / 1000;
}
