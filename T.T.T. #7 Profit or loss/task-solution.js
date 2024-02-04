const profitLoss = (records) =>
  +(
    records.reduce((s, [m, p]) => s + m, 0) -
    records.reduce((s, [m, p]) => s + (m / (100 + p)) * 100, 0)
  ).toFixed(2);
