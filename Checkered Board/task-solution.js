function checkeredBoard(dimension) {
  let white = !!(dimension % 2),
    board = [];
  for (let i = 0; i < dimension; i++) {
    let row = [];
    for (let j = 0; j < dimension; j++) {
      row.push(white ? '■' : '□');
      white = !white;
    }
    white = !!(dimension % 2) ? white : !white;
    board.push(row.join(' '));
  }
  return dimension < 2 || dimension !== parseInt(dimension) ? false : board.join('\n');
}
