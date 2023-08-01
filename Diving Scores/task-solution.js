const scoreOfDive = (scores, tariff) =>
  (
    [...scores]
      .sort((a, b) => a - b)
      .slice(2, -2)
      .reduce((s, n) => s + n, 0) * tariff
  ).toFixed(2);
