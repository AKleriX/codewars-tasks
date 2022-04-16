const uniqueDigitProducts = (a) =>
  new Set(a.map((n) => [...n.toString()].reduce((mul, d) => mul * +d, 1))).size;
