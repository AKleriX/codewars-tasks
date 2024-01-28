const getRequired = ([p1P, p1M], [p2P, p2M]) => {
  const [p1, p2] = [p1P + p1M, p2P + p2M];
  return p1 === p2
    ? `Random`
    : p1 >= p2 + 6
    ? `Auto-win`
    : p1 + 6 <= p2
    ? `Auto-lose`
    : p1 > p2
    ? `(${p2 + 7 - p1}..6)`
    : p1 + 5 > p2
    ? `(1..${p1 + 5 - p2})`
    : `Pray for a tie!`;
};
