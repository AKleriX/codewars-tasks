function whiteBlackAreas(cols, rows) {
  let columnsWB = cols.reduce(getSumEvenOddElements, [0, 0]),
    rowsWB = rows.reduce(getSumEvenOddElements, [0, 0]);
  return [
    columnsWB[0] * rowsWB[0] + columnsWB[1] * rowsWB[1],
    columnsWB[1] * rowsWB[0] + columnsWB[0] * rowsWB[1],
  ];
}

const getSumEvenOddElements = (sums, n, i) => {
  sums[i % 2] += n;
  return sums;
};
