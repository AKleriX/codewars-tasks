const top3 = (products, amounts, prices) =>
  products
    .map((p, i) => [p, amounts[i] * prices[i], i])
    .sort((a, b) => (b[1] === a[1] ? a[2] - b[2] : b[1] - a[1]))
    .slice(0, 3)
    .map((p) => p[0]);
