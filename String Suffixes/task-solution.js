function stringSuffix(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let subStr = s.slice(i);
    for (let j = subStr.length; j > 0; j--)
      if (s.startsWith(subStr.slice(0, j))) {
        sum += subStr.slice(0, j).length;
        break;
      }
  }
  return sum;
}
