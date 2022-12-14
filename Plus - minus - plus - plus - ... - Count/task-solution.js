const catchSignChange = (arr) =>
  arr.reduce(
    (c, n, i, arr) =>
      !i ? c : Math.sign(!arr[i - 1] ? 1 : arr[i - 1]) === Math.sign(!n ? 1 : n) ? c : c + 1,
    0,
  );
