const removeDuplication = (arr) =>
  arr.filter((n, i, a) => a.indexOf(n) === i && a.lastIndexOf(n) === i);
