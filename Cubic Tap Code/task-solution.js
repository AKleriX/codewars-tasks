const cube = [
  ['ABC', 'DEF', 'GHI'],
  ['JKL', 'MNO', 'PQR'],
  ['STU', 'VWX', 'YZ '],
];

function encode(str) {
  let code = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < 3; j++)
      for (let k = 0; k < 3; k++)
        if (cube[j][k].includes(str[i]))
          code.push(
            '.'.repeat(cube[j][k].indexOf(str[i]) + 1) +
              ' ' +
              '.'.repeat(k + 1) +
              ' ' +
              '.'.repeat(j + 1),
          );
  }
  return code.join(' ');
}

function decode(str) {
  let code = str.split(' '),
    decodeStr = '';
  for (let i = 0; i < code.length - 2; i += 3)
    decodeStr += cube[code[i + 2].length - 1][code[i + 1].length - 1][code[i].length - 1];
  return decodeStr;
}
