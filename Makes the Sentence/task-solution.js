const makesTheSentence = (characterArray, sentenceString) =>
  [...characterArray].sort().join('') === [...sentenceString.replace(/\s/g, '')].sort().join('');
