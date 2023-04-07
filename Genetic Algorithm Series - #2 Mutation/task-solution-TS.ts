export const mutate = (chromosome: string, p: number): string =>
  [...chromosome].map((d) => (Math.random() <= p ? (d === '1' ? '0' : '1') : d)).join('');
