const solve = (a, b) =>
  [...a].reduce((str, s) => str.replace(s, ''), b).length ? 0 : a.length - b.length;
