function rpsls(pl1, pl2) {
  const dict = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['scissors', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock'],
  };
  return !dict[pl1].includes(pl2) && !dict[pl2].includes(pl1)
    ? 'Draw!'
    : `${dict[pl1].includes(pl2) ? 'Player 1' : 'Player 2'} Won!`;
}
