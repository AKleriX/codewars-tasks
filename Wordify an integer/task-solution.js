function wordify(n) {
  const dic = {
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
    15: 'fifteen',
    18: 'eighteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  let decs = n % 100,
    hundreds = n - decs,
    numsWords = [];
  if (hundreds) numsWords.push(dic[hundreds.toString()[0]], 'hundred');
  if (decs)
    if (dic[decs] || decs < 20)
      numsWords.push(dic[decs] ? dic[decs] : dic[decs.toString()[1]] + 'teen');
    else numsWords.push(dic[decs.toString()[0] + '0'], dic[decs.toString()[1]]);
  if (!numsWords.length) numsWords.push('zero');
  return numsWords.join(' ');
}
