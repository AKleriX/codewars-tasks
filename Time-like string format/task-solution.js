function solution(hour) {
  let str = hour.toString();
  if (str.length > 4 || str.length < 3) throw new Error('Invalid input');
  str = addZeros(str);
  return str.slice(str[0] === '0' ? 1 : 0, 2) + ':' + str.slice(2);
}

const addZeros = (n) => '0'.repeat(4 - n.length) + n;
