const repeats = (arr) =>
  arr.reduce((s, n, i, ar) => s + (ar.indexOf(n) === ar.lastIndexOf(n) ? n : 0), 0);
