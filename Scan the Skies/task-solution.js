const scanningSkies = (arr) =>
  [...arr]
    .sort((a, b) => (a.dist === b.dist ? a.price - b.price : b.dist - a.dist))
    .map((v) => v.dest);
