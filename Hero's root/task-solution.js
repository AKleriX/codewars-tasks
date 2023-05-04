function intRac(n, guess) {
  let currentGuess = getGuess(n, guess),
    counter = 1;
  while (Math.abs(currentGuess - guess) >= 1) {
    guess = currentGuess;
    currentGuess = getGuess(n, currentGuess);
    counter++;
  }
  return counter;
}

const getGuess = (n, x) => Math.floor((x + n / x) / 2);
