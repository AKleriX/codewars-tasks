const allNonConsecutive = (arr) =>
  arr.reduce((c, n, i, a) => (!i || n === a[i - 1] + 1 ? c : (c.push({ i, n }), c)), []);
