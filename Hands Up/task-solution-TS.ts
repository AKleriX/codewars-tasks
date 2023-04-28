export const getPositions = (s: number): number[] => [
  s % 3,
  Math.floor(s / 3) % 3,
  Math.floor(s / 9) % 3,
];
