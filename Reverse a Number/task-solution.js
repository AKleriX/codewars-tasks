function reverseNumber(n) {
  let revNum = [...n.toString()].reverse().join('');
  return n < 0 ? -1 * +revNum.slice(0, -1) : +revNum;
}
