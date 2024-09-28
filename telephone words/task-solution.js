const keypad = {
  0: ['0'],
  1: ['1'],
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z'],
};

const telephoneWords = (digitString) => {
  const result = [];
  if (!digitString || digitString.length === 0) return [];

  function generateCombinations(index, currentCombination) {
    if (index === digitString.length) {
      result.push(currentCombination);
      return;
    }

    const letters = keypad[digitString[index]];
    for (let i = 0; i < letters.length; i++)
      generateCombinations(index + 1, currentCombination + letters[i]);
  }
  generateCombinations(0, '');
  return result;
};
