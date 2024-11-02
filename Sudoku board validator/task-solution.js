const validateSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    let rows = new Set(),
      cols = new Set(),
      blocks = new Set();
    for (let j = 0; j < 9; j++) {
      let rowVal = board[i][j],
        colVal = board[j][i],
        blockVal = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (rowVal === 0 || colVal === 0 || blockVal === 0) return false;
      if (rows.has(rowVal) || cols.has(colVal) || blocks.has(blockVal)) return false;
      rows.add(rowVal);
      cols.add(colVal);
      blocks.add(blockVal);
    }
  }
  return true;
};
