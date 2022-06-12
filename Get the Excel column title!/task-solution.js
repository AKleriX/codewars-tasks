function getColumnTitle(num) {
  if (typeof num !== 'number') throw TypeError;
  else if (num < 1) throw IndexError;
  let arr = [];
  while (--num >= 26) {
    arr.push(num % 26);
    num = Math.trunc(num / 26);
  }
  arr.push(num);
  return arr
    .reverse()
    .map((n) => String.fromCharCode(65 + n))
    .join('');
}
