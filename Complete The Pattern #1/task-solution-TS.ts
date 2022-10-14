export const pattern = (n: number): string =>
  Array.from({ length: n }, (_, i) => (i + 1).toString().repeat(i + 1)).join('\n');
