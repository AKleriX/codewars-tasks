const snakesAndLadders = function (board, dice) {
  let currentPos = 0;
  for (let i = 0; i < dice.length; i++)
    if (currentPos + dice[i] < board.length) currentPos += dice[i] + board[currentPos + dice[i]];
  return currentPos;
};
