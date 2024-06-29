const distSameLetter = (s) => {
  const idx = {};
  let maxDis = 0,
    maxChar = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!(char in idx)) idx[char] = { first: i, last: i };
    else idx[char].last = i;

    const distance = idx[char].last - idx[char].first;
    if (distance > maxDis || (distance === maxDis && s.indexOf(char) <= s.indexOf(maxChar))) {
      maxDis = distance;
      maxChar = char;
    }
  }

  return `${maxChar}${++maxDis}`;
};
