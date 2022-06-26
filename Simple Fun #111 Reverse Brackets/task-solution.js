function reverseParentheses(s) {
  let str = '' + s;
  while (/\(/.test(str)) str = str.replace(/\(([^()]+)\)/, (m, p) => [...p].reverse().join(''));
  return str;
}
