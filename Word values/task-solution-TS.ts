export function wordValue(arr: string[]) {
  const abc: string = ' abcdefghijklmnopqrstuvwxyz';
  return arr.map((str, i) => [...str].reduce((s, l) => s + abc.indexOf(l), 0) * (i + 1));
}
