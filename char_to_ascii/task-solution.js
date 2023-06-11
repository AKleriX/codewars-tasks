const charToAscii = (string) =>
  string.length
    ? [...string.replace(/[^a-z]/gi, '')].reduce((d, c) => ((d[c] = c.charCodeAt()), d), {})
    : null;
