function sort(sentence) {
  let words = sentence.replace(/[^a-z0-9 ]/gi, '').split(' '),
    lowerLettersWords = words
      .filter((word) => word[0] === word[0].toLowerCase())
      .sort((a, b) => a.localeCompare(b)),
    upperLettersWords = words
      .filter((word) => word[0] === word[0].toUpperCase())
      .sort((a, b) => b.localeCompare(a));
  return lowerLettersWords.concat(upperLettersWords).join(' ');
}
