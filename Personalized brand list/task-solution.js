const sortedBrands = (history) => {
  const count = new Map();
  history.forEach(({ brand }) => count.set(brand, (count.get(brand) || 0) + 1));
  return [...new Set(history.map(({ brand }) => brand))].sort(
    (a, b) =>
      count.get(b) - count.get(a) ||
      history.findIndex((p) => p.brand === a) - history.findIndex((p) => p.brand === b),
  );
};
