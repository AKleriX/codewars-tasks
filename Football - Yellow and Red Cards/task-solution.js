function menStillStanding(cards) {
  let teams = [{}, {}],
    players = [11, 11];
  for (let i = 0; i < cards.length; i++) {
    let team = cards[i][0] === 'A' ? 0 : 1,
      player = cards[i].slice(1, cards[i].length - 1),
      card = cards[i][cards[i].length - 1];
    if (!teams[team][player] || teams[team][player] < 2) {
      teams[team][player] = (teams[team][player] || 0) + (card === 'Y' ? 1 : 2);
      players[team] -= teams[team][player] >= 2 ? 1 : 0;
      if (players[team] < 7) break;
    }
  }
  return players;
}
