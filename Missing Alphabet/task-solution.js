function insertMissingLetters(str) {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    usedLetters = new Set(str.toUpperCase());
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    if (str.indexOf(str[i]) === i) {
      for (let j = abc.indexOf(str[i].toUpperCase()) + 1; j < abc.length; j++)
        if (!usedLetters.has(abc[j])) newStr += abc[j];
    }
  }
  return newStr;
}
