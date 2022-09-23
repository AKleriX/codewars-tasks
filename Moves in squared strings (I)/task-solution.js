function vertMirror(strng) {
  let rows = strng.split('\n');
  return rows.map((r) => [...r].reverse().join('')).join('\n');
}
function horMirror(strng) {
  return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
  return fct(s);
}
