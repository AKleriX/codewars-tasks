function solution(pairs) {
  let strArr = [];
  Object.keys(pairs).forEach((k) => strArr.push(`${k} = ${pairs[k]}`));
  return strArr.join(',');
}
