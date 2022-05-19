function isOddHeavy(n) {
  let minOdd = Math.min.apply(
      null,
      n.filter((num) => num % 2),
    ),
    maxEven = Math.max.apply(
      null,
      n.filter((num) => !(num % 2)),
    );
  return minOdd > maxEven && minOdd !== Infinity;
}
