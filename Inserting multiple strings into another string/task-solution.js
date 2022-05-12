function insertAtIndexes(phrase, word, indexes) {
  for (var i = 0; i < indexes.length; i++)
    phrase =
      phrase.slice(0, indexes[i] + word.length * i) +
      word +
      phrase.slice(indexes[i] + word.length * i);
  return phrase;
}
