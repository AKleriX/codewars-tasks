const bangBang = (history) =>
  history
    .split('\n')
    .pop()
    .replace(/^\s+\d+\s+/, '');
