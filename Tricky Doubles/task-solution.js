const trickyDoubles = (n) =>
  !(n.toString().length % 2) &&
  n.toString().slice(0, n.toString().length / 2) === n.toString().slice(-n.toString().length / 2)
    ? n
    : n * 2;
