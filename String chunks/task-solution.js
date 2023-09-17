const stringChunk = (str, n) =>
  n > 0 && str.length ? str.match(new RegExp('.{1,' + n + '}', 'g')) : [];
