const christmasTree = (height) => {
  if (height < 3) return '';

  while (!Number.isInteger(height / 3)) height--;

  let str = '',
    w = (height * 2) / 3 + 3;

  for (let k = 0, top = 1; k < height / 3; k++, top += 2)
    for (let i = top; i <= top + 4; i += 2) str += ' '.repeat((w - i) / 2) + '*'.repeat(i) + '\r\n';

  str += ' '.repeat((w - 3) / 2) + '###';

  return str;
};
