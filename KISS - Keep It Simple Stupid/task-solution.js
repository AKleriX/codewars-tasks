const isKiss = (words) => {
  const wordsArr = words.split(' ');
  return wordsArr.every((w) => w.length <= wordsArr.length)
    ? 'Good work Joe!'
    : 'Keep It Simple Stupid';
};
