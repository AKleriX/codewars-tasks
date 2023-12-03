const smallWordHelper = (sentence) =>
  sentence
    .split(' ')
    .map((w) => (w.length < 4 ? w.toUpperCase() : w.replace(/[aeoui]/gi, '')))
    .join(' ');
