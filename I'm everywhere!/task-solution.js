function i(word) {
  let vCounter = [...word].filter((l) => /[aeoui]/i.test(l)).length,
    cCounter = word.length - vCounter;
  return word.length && word[0] !== word[0].toLowerCase() && vCounter < cCounter && word[0] !== 'I'
    ? 'i' + word
    : 'Invalid word';
}
