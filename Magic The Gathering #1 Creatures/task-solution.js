function battle(player1, player2) {
  let winsCards = {
      player1: [],
      player2: [],
    },
    lastPlayer1 = player1.slice(player2.length),
    lastPlayer2 = player2.slice(player1.length);
  for (let i = 0; i < Math.min(player1.length, player2.length); i++) {
    if (player1[i][1] > player2[i][0]) winsCards.player1.push(player1[i]);
    if (player2[i][1] > player1[i][0]) winsCards.player2.push(player2[i]);
  }
  winsCards.player1 = winsCards.player1.concat(lastPlayer1);
  winsCards.player2 = winsCards.player2.concat(lastPlayer2);
  return winsCards;
}
