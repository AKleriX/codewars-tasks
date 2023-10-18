const jeringonza = (word) =>
  word.replace(/[aeoui]/gi, (v) => (v.toUpperCase() === v ? v + 'P' + v : v + 'p' + v));
