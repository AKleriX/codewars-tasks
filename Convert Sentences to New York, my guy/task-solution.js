const newYorker = (text) =>
  text
    .split('.')
    .map((s) => (s.length && s !== ' '.repeat(s.length) ? s + ' my guy' : s))
    .join('.');
