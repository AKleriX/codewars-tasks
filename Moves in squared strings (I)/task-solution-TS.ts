export function vertMirror(strng: string) {
  let rows: string[] = strng.split('\n');
  return rows.map((r) => [...r].reverse().join('')).join('\n');
}
export function horMirror(strng: string) {
  return strng.split('\n').reverse().join('\n');
}
export function oper(fct: (s: string) => string, s: string) {
  return fct(s);
}
