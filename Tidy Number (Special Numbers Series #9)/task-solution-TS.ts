export const tidyNumber = (n: number): boolean =>
  n.toString() === [...n.toString()].sort().join('');
