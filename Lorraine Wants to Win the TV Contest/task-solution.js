const unscramble = (scramble) => {
  const sortedWord = [...scramble].sort().join('');
  return wordList.reduce((d, w) => ([...w].sort().join('') === sortedWord ? [...d, w] : d), []);
};
