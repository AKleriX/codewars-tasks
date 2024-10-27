const verifyLatinSquare = (array, m) => {
  if (array.some((row) => row.length !== array.length)) return 'Array not square';
  if (array.length !== m) return 'Array is wrong size';
  for (let i = 0; i < m; i++) {
    let rowSet = new Set(),
      colSet = new Set();
    for (let j = 0; j < m; j++) {
      let rowVal = array[i][j],
        colVal = array[j][i];
      if (rowVal < 1 || rowVal > m)
        return `${rowVal} at ${i + 1},${j + 1} is not between 1 and ${m}`;
      if (colVal < 1 || colVal > m)
        return `${colVal} at ${j + 1},${i + 1} is not between 1 and ${m}`;
      if (rowSet.has(rowVal)) return `${rowVal} occurs more than once in row ${i + 1}`;
      if (colSet.has(colVal)) return `${colVal} occurs more than once in column ${i + 1}`;
      rowSet.add(rowVal);
      colSet.add(colVal);
    }
  }
  return `Valid latin square of size ${m}`;
};
