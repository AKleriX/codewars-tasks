const nthterm = function (first, n, c) {
  while (n--) first += c;
  return first;
};
