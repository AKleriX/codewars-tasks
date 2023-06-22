export function gracefulTipping(bill: number): number {
  let tb: number = Math.ceil(bill * 1.15),
    tenth: number = Math.floor(Math.log10(tb)) - 1,
    mod: number = 5 * 10 ** tenth;
  return tb % mod && tb > 10 ? mod * Math.ceil(tb / mod) : tb;
}
