const countCorrectCharacters = (correctWord, guess) => {
  if (correctWord.length !== guess.length) throw new Error('Different lengths');
  return [...correctWord].reduce((s, l, i) => s + (guess[i] === l), 0);
};
