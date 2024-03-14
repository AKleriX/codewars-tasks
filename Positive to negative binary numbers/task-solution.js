const positiveToNegative = (b) =>
  b
    .map((b) => +!b)
    .map((b, i, a) => (!b && a.lastIndexOf(0) === i ? 1 : i > a.lastIndexOf(0) ? 0 : b));
