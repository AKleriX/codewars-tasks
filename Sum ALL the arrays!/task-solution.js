const arraySum = (arr) =>
  arr.reduce(
    (s, el) =>
      typeof el === 'number' && !isNaN(el) ? s + el : Array.isArray(el) ? s + arraySum(el) : s,
    0,
  );
