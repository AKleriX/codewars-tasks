function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    let column = [];
    for (let j = 0; j < board.length; j++) column.push(board[j][i]);
    if (
      [...board[i]].sort((a, b) => a - b).join(',') !== board[i].join(',') ||
      [...column].sort((a, b) => a - b).join(',') !== column.join(',')
    )
      return false;
  }
  return true;
}
