const replaceChar = (char, str) => (str.includes(char) ? '' : char);

const solve = (a, b) =>
  a.replace(/./g, (s) => replaceChar(s, b)) + b.replace(/./g, (s) => replaceChar(s, a));
