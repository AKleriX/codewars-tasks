const sortArray = (a1, a2) => {
  const a1Letters = a1.map((w) => w[0]);
  return [...a2].sort((a, b) => a1Letters.indexOf(a[0]) - a1Letters.indexOf(b[0]));
};
