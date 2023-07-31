const digitDegree = (n) => {
  let counter = 0;
  while (n > 9) {
    n = +[...n.toString()].reduce((s, d) => s + +d, 0);
    counter++;
  }
  return counter;
};
