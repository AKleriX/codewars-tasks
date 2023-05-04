export function intRac(n: number, guess: number): number {
  let currentGuess: number = getGuess(n, guess),
    counter = 1;
  while (Math.abs(currentGuess - guess) >= 1) {
    guess = currentGuess;
    currentGuess = getGuess(n, currentGuess);
    counter++;
  }
  return counter;
}

const getGuess = (n: number, x: number): number => Math.floor((x + n / x) / 2);
