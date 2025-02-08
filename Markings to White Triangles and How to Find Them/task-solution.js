const howToFindThem = (rightTriangle) => {
  let { a, b, c } = rightTriangle;
  if (typeof a !== 'number') a = Math.sqrt(c * c - b * b);
  if (typeof b !== 'number') b = Math.sqrt(c * c - a * a);
  if (typeof c !== 'number') c = Math.sqrt(a * a + b * b);
  return { a, b, c };
};
