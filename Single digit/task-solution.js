function singleDigit(n) {
  while (n > 9) n = [...n.toString(2)].reduce((s, d) => +s + +d);
  return n;
}
