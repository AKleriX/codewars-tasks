function travelChessboard(s) {
  let [firstCoord, secondCoord] = s
    .slice(0, -1)
    .split(')')
    .map((d) => d.slice(1).split(' ').map(Number));
  return (
    fact(secondCoord[0] - firstCoord[0] + (secondCoord[1] - firstCoord[1])) /
    (fact(secondCoord[0] - firstCoord[0]) * fact(secondCoord[1] - firstCoord[1]))
  );
}

const fact = (n) => (n > 1 ? n * fact(n - 1) : 1);
