function longestWord(letters) {
  let dict = {},
    maxLen = 0,
    arr = [];
  for (let i = 0; i < letters.length; i++) dict[letters[i]] = (dict[letters[i]] || 0) + 1;
  for (let i = 0; i < words.length; i++) {
    let counter = { ...dict },
      underZero = false;
    for (let j = 0; j < words[i].length; j++) {
      counter[words[i][j]] = (counter[words[i][j]] || 0) - 1;
      if (counter[words[i][j]] < 0) underZero = true;
    }
    if (!underZero) {
      if (words[i].length > maxLen) [maxLen, arr] = [words[i].length, [words[i]]];
      else if (words[i].length === maxLen) arr.push(words[i]);
    }
  }
  return arr.length ? arr : null;
}
