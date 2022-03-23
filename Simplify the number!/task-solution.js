function simplify(number) {
  let resultFormula = [],
    strNum = number.toString();
  for (let i = 0; i < strNum.length; i++)
    if (strNum[i] !== '0') {
      let tenPow = '1' + '0'.repeat(strNum.length - i - 1);
      resultFormula.push(`${strNum[i]}${tenPow !== '1' ? '*' + tenPow : ''}`);
    }
  return resultFormula.join('+');
}
