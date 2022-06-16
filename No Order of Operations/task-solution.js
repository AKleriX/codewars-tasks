function noOrder(s) {
  let str = s.replace(/\s+/g, ''),
    actions = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => Math.floor(a / b),
      '%': (a, b) => a % b,
      '^': (a, b) => a ** b,
    },
    lastSign = [],
    num = null;
  if (!/[+\-*/\^%]/.test(str)) return +str;
  for (let i = 0; i <= str.length; i++) {
    if (i === str.length || /[+\-*/\^%]/.test(str[i])) {
      if (!lastSign.length && i < str.length) lastSign = [str[i], i];
      else {
        if (num === null) num = +str.slice(0, lastSign[1]);
        let secondNum = +str.slice(lastSign[1] + 1, i);
        if (/[/%]/.test(lastSign[0]) && secondNum === 0) return null;
        num = actions[lastSign[0]](num, secondNum);
        lastSign = [str[i], i];
      }
    }
  }
  return num;
}
