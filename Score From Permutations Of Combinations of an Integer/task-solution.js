const scPermComb = (num) => {
  const digits = String(num).split(''),
    combinations = new Set();

  const generateCombinations = (current, remaining) => {
    if (current.length > 0) combinations.add(current);
    for (let i = 0; i < remaining.length; i++)
      generateCombinations(
        current + remaining[i],
        remaining.slice(0, i).concat(remaining.slice(i + 1)),
      );
  };

  generateCombinations('', digits);

  return Array.from(combinations)
    .filter((n) => n[0] !== '0')
    .reduce((sum, n) => sum + Number(n), 0);
};
