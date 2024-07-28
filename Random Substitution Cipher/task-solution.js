const randomSub = (_) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz',
    shuffled = abc
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
  return [...abc].reduce((acc, letter, i) => {
    acc[letter] = shuffled[i];
    return acc;
  }, {});
};
