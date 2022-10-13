function add(num1, num2) {
  let str1 = num1.toString(),
    str2 = num2.toString(),
    maxLen = Math.max(str1.length, str2.length),
    sum = '';
  str1 = addZeros(str1, maxLen);
  str2 = addZeros(str2, maxLen);
  for (let i = maxLen - 1; i >= 0; i--) sum = +str1[i] + +str2[i] + sum;
  return +sum;
}

const addZeros = (s, l) => '0'.repeat(l - s.length) + s;
