function check(board) {
  let kingPos = [-1, -1],
    queenPos = [-1, -1],
    dx = null,
    dy = null;
  for (let i = 0; i < 5; i++)
    for (let j = 0; j < 5; j++)
      if (board[i][j] === 'k') kingPos = [i, j];
      else if (board[i][j] === 'q') queenPos = [i, j];
  dx = kingPos[0] - queenPos[0];
  dy = kingPos[1] - queenPos[1];
  return !dx || !dy || Math.abs(dx) === Math.abs(dy);
}
