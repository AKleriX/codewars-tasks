const triangle = (row) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz',
    getLetterIndex = (char) => alphabet.indexOf(char) + 1,
    getLetterFromIndex = (index) => alphabet[(index - 1) % 26];

  while (row.length > 1) {
    let newStr = '';
    for (let i = 0; i < row.length - 1; i++) {
      let sum = getLetterIndex(row[i]) + getLetterIndex(row[i + 1]);
      newStr += getLetterFromIndex(sum);
    }
    row = newStr;
  }
  return row;
};
