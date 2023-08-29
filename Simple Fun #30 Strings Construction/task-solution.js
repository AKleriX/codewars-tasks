const stringsConstruction = (A, B) => {
  const counterA = [...A].reduce(getLettersCounter, {}),
    counterB = [...B].reduce(getLettersCounter, {});
  return Math.min(...Object.keys(counterA).map((v) => (counterB[v] / counterA[v]) | 0));
};

const getLettersCounter = (dict, letter) => ((dict[letter] = (dict[letter] || 0) + 1), dict);
