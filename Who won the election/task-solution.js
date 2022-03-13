function getWinner(listOfBallots) {
  let winner = null,
    absMaj = Math.floor(listOfBallots.length / 2),
    ballotsCounter = {};
  for (let i = 0; i < listOfBallots.length; i++) {
    ballotsCounter[listOfBallots[i]] = ballotsCounter[listOfBallots[i]]
      ? ballotsCounter[listOfBallots[i]] + 1
      : 1;
    if (ballotsCounter[listOfBallots[i]] > absMaj) winner = listOfBallots[i];
  }
  return winner;
}
