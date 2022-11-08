const longestWord = (str) =>
  str.split(' ').reduce((maxW, w) => (w.length >= maxW.length ? w : maxW), '');
