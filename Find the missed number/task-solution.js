const findNumber = (start, stop, string) => {
  const countString = (s) => s.split('').reduce((s, v) => (s[v]++, s), Array(10).fill(0)),
    countedStr = countString(string),
    baseArray = Object.keys([...Array(stop + 1)]).slice(start),
    countedBase = countString(baseArray.join('')),
    countedDiff = countedBase.map((v, i) => v - countedStr[i]);

  return baseArray.filter((n) => countString(n).join('') === countedDiff.join('')).map(Number);
};
