export const specialNumber = (n: number): string =>
  `${/[6-9]/g.test(n.toString()) ? 'NOT' : 'Special'}!!`;
