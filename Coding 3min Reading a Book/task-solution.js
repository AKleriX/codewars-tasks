const sc = (words) =>
  words
    .toLowerCase()
    .replace(/[^a-z ]/g, '')
    .split(' ')
    .reduce((c, w, i, words) => c + (words.indexOf(w) === i ? w.length : 1), 0);
