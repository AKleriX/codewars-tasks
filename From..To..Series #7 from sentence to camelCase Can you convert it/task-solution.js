function toCamelCase(s, n) {
  let words = s.split(' ');
  return words
    .map((word, i, arr) => {
      let currentWord = word.toLowerCase();
      if (i > 0 && (n === 1 || n === 3))
        currentWord = currentWord[0].toUpperCase() + currentWord.slice(1);
      if (i < arr.length - 1 && (n === 2 || n === 3))
        currentWord = currentWord.slice(0, -1) + currentWord.slice(-1).toUpperCase();
      return currentWord;
    })
    .join('');
}
