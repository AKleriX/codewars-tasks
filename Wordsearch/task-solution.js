function wordSearch(word, text) {
  let words = text.split(/[^a-z]+/gi);
  return words.includes(word);
}
