function maxMatch(sentence) {
  for (let i = sentence.length; i > 0; i--)
    if (i === 1 || VALID_WORDS.has(sentence.slice(0, i)))
      return [sentence.slice(0, i)].concat(maxMatch(sentence.slice(i)));
  return [];
}
