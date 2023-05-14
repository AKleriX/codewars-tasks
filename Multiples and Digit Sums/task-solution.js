function procedure(n) {
  let sum = 0,
    currentN = n;
  while (currentN <= 100) {
    sum += [...currentN.toString()].reduce((s, d) => s + +d, 0);
    currentN += n;
  }
  return sum;
}
