export const hexWordSum = (string: string): number =>
  string
    .split(' ')
    .map((w: string): string => w.replace(/[OS]/g, (l) => (l === 'O' ? '0' : '5')))
    .reduce((s: number, n: string): number => s + (/^[A-F05]+$/.test(n) ? parseInt(n, 16) : 0), 0);
