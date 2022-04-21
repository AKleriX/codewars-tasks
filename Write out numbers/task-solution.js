function number2words(n) {
  const numsDic = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  let strNum = '0'.repeat(6 - n.toString().length) + n.toString(),
    str = [];
  for (let i = 0; i < strNum.length; i++)
    switch (i) {
      case 0:
        if (strNum[0] !== '0') {
          str.push(numsDic[strNum[0]]);
          str.push('hundred');
        }
        break;
      case 1:
        if (strNum[1] !== '0') {
          if (strNum[1] === '1') str.push(numsDic[strNum.slice(1, 3)]);
          else
            str.push(
              numsDic[strNum[1] + '0'] + (strNum[2] === '0' ? '' : '-' + numsDic[strNum[2]]),
            );
        }
        break;
      case 2:
        if (strNum[2] !== '0' && strNum[1] === '0') str.push(numsDic[strNum[2]]);
        break;
      case 3:
        if (str.length) str.push('thousand');
        if (strNum[3] !== '0') {
          str.push(numsDic[strNum[3]]);
          str.push('hundred');
        }
        break;
      case 4:
        if (strNum[4] !== '0') {
          if (strNum[4] === '1') str.push(numsDic[strNum.slice(4)]);
          else
            str.push(
              numsDic[strNum[4] + '0'] + (strNum[5] === '0' ? '' : '-' + numsDic[strNum[5]]),
            );
        }
        break;
      case 5:
        if ((strNum[5] !== '0' && strNum[4] === '0') || !str.length) str.push(numsDic[strNum[5]]);
        break;
    }
  return str.join(' ');
}
