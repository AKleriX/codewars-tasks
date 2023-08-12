export const maxlen = (l1: number, l2: number): number => {
  const max: number = Math.max(l1, l2),
    min: number = Math.min(l1, l2);
  return max / 3 > min ? max / 3 : max - min > min ? min : max / 2;
};
