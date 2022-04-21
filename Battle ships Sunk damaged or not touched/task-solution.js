function damagedOrSunk(board, attacks) {
  let currentBoard = [...board],
    shipsCounter = {},
    resultScore = {
      sunk: 0,
      damaged: 0,
      notTouched: 0,
      points: 0,
    };
  for (let i = 0; i < currentBoard.length; i++)
    for (let j = 0; j < currentBoard[i].length; j++)
      if (currentBoard[i][j] > 0)
        shipsCounter[currentBoard[i][j]] = shipsCounter[currentBoard[i][j]]
          ? [shipsCounter[currentBoard[i][j]][0] + 1, 'notTouched']
          : [1, 'notTouched'];
  for (let i = 0; i < attacks.length; i++)
    if (currentBoard[currentBoard.length - attacks[i][1]][attacks[i][0] - 1] > 0) {
      shipsCounter[currentBoard[currentBoard.length - attacks[i][1]][attacks[i][0] - 1]][0]--;
      if (!shipsCounter[currentBoard[currentBoard.length - attacks[i][1]][attacks[i][0] - 1]][0])
        shipsCounter[currentBoard[currentBoard.length - attacks[i][1]][attacks[i][0] - 1]][1] =
          'sunk';
      else
        shipsCounter[currentBoard[currentBoard.length - attacks[i][1]][attacks[i][0] - 1]][1] =
          'damage';
    }

  for (let ship in shipsCounter)
    switch (shipsCounter[ship][1]) {
      case 'notTouched':
        resultScore.notTouched++;
        resultScore.points--;
        break;
      case 'sunk':
        resultScore.sunk++;
        resultScore.points++;
        break;
      case 'damage':
        resultScore.damaged++;
        resultScore.points += 0.5;
        break;
    }
  return resultScore;
}
