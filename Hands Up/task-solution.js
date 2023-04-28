const getPositions = (s) => [
  s % 3,
  s % 9 < 3 ? 0 : s % 9 < 6 ? 1 : 2,
  s % 27 < 9 ? 0 : s % 27 < 18 ? 1 : 2,
];
