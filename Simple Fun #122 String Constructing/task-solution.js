const stringConstructing = (a, s) => evaluate([...a], [...a], [...s], 1);

const evaluate = (origAlphabet, remainingAlphabet, word, cost) => {
  if (word.length === 0) return cost + remainingAlphabet.length;
  if (remainingAlphabet.length === 0) return evaluate(origAlphabet, origAlphabet, word, cost + 1);
  if (remainingAlphabet[0] === word[0])
    return evaluate(origAlphabet, remainingAlphabet.slice(1), word.slice(1), cost);
  else return evaluate(origAlphabet, remainingAlphabet.slice(1), word, cost + 1);
};
