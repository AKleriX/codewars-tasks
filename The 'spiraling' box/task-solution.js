const createBox = (m, n) => {
  const rows = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++)
      row.push(1 + Math.min(Math.min(i, n - i - 1), Math.min(j, m - j - 1)));
    rows.push(row);
  }
  return rows;
};
