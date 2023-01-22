const scrabbleScore = (str) =>
  [...str].reduce((score, s) => score + ($dict[s.toUpperCase()] || 0), 0);
