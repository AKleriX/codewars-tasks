function find(s) {
  let combsFirst = (s.match(/(!+\?+)/g) || ['']).map((c) => [c, c.length]),
    combsSecond = (s.match(/(\?+!+)/g) || ['']).map((c) => [c, c.length]),
    maxLengthFirst = Math.max.apply(
      null,
      combsFirst.map((c) => c[1]),
    ),
    maxLengthSecond = Math.max.apply(
      null,
      combsSecond.map((c) => c[1]),
    );
  combsFirst = combsFirst.filter((c) => c[1] === maxLengthFirst);
  combsSecond = combsSecond.filter((c) => c[1] === maxLengthSecond);
  if (maxLengthFirst !== maxLengthSecond)
    return maxLengthFirst > maxLengthSecond ? combsFirst[0][0] : combsSecond[0][0];
  return s.indexOf(combsFirst[0][0]) < s.indexOf(combsSecond[0][0])
    ? combsFirst[0][0]
    : combsSecond[0][0];
}
