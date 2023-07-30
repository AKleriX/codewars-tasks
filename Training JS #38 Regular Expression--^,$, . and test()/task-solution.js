const findSimilarity = (str, word) =>
  str
    .split(' ')
    .filter((w) =>
      new RegExp('^' + word[0] + '.'.repeat(word.length - 2) + word.slice(-1) + '$').test(w),
    )
    .join(' ');
