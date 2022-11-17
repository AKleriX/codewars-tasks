function insertDash(num) {
  let strNum = num.toString(),
    newStr = '';
  for (let i = 0; i < strNum.length; i++)
    newStr += strNum[i] + (+strNum[i] % 2 && +strNum[i + 1] % 2 ? '-' : '');
  return newStr;
}
