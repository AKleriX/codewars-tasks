function guessColour(guesses, hats) {
  let redCount = hats.filter((c) => c === 'Red').length,
    backRed = guesses.slice(1).filter((c) => c === 'Red').length;
  if (!guesses.length) return redCount % 2 ? 'Blue' : 'Red';
  return guesses[0] === 'Blue'
    ? (redCount + backRed) % 2
      ? 'Blue'
      : 'Red'
    : (redCount + backRed) % 2
    ? 'Red'
    : 'Blue';
}
