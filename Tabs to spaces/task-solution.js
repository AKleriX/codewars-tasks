const tabToSpaces = (text) =>
  text
    .split('\n')
    .map((r) => {
      let newRow = '',
        c = 4;
      for (let i = 0; i < r.length; i++) {
        newRow += /\t/.test(r[i]) ? ' '.repeat(c) : r[i];
        c = /\t/.test(r[i]) || c === 1 ? 4 : c - 1;
      }
      return newRow;
    })
    .join('\n');
