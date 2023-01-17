export const solution = (start: number, finish: number): number =>
  Math.floor((finish - start) / 3) + ((finish - start) % 3);
