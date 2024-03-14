const newNumeralSystem = (number) => {
  const dict = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ],
    num = dict.indexOf(number),
    res = [];
  for (let i = 0; i <= num / 2; i++) res.push(dict[i] + ' + ' + dict[num - i]);
  return res;
};
