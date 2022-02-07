function isSolved(board) {
  let zeroCounter = 0,
      rows = [...board,
             [board[0][0], board[0][1], board[0][2]],
             [board[1][0], board[1][1], board[1][2]],
             [board[2][0], board[2][1], board[2][2]],
             [board[0][0], board[1][1], board[2][2]],
             [board[2][0], board[1][1], board[0][2]]];
  for (let i = 0; i < rows.length; i++){
    let symbols = new Set(rows[i]);
    if (symbols.size === 1)
      if (symbols.has(1)) return 1;
      else if (symbols.has(2)) return 2;
    if (symbols.has(0)) zeroCounter++;    
  }
  return zeroCounter ? -1 : 0;
}