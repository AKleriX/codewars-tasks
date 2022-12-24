const spongeMeme = (sentence) =>
  [...sentence].map((l, i) => (i % 2 ? l.toLowerCase() : l.toUpperCase())).join('');
