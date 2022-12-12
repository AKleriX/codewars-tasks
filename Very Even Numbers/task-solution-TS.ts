export function isVeryEvenNumber(n: number): boolean {
  let strN: string = n.toString();
  while (strN.length > 1) strN = [...strN].reduce((s, d) => s + +d, 0).toString();
  return !(+strN % 2);
}
