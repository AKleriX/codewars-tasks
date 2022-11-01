export const gps = (s: number, x: number[]): number =>
  x.length > 1
    ? Math.floor(
        Math.max.apply(
          Math,
          x.slice(1).map((sp, i) => (3600 * (sp - x[i])) / s),
        ),
      )
    : 0;
