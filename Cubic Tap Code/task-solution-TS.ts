const cube: string[][] = [
  ['ABC', 'DEF', 'GHI'],
  ['JKL', 'MNO', 'PQR'],
  ['STU', 'VWX', 'YZ '],
];

export function encode(str: string): string {
  let code: string[] = [];
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

export function decode(str: string): string {
  let code: string[] = str.split(' '),
    decodeStr: string = '';
  for (let i = 0; i < code.length - 2; i += 3)
    decodeStr += cube[code[i + 2].length - 1][code[i + 1].length - 1][code[i].length - 1];
  return decodeStr;
}
