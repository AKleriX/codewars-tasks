export function freqSeq(str: string, sep: string): string {
  let sCounter: { [key: string]: number } = [...str].reduce(
    (c: { [key: string]: number }, s: string) => ((c[s] = (c.hasOwnProperty(s) ? c[s] : 0) + 1), c),
    {},
  );
  return [...str].map((s) => sCounter[s]).join(sep);
}
