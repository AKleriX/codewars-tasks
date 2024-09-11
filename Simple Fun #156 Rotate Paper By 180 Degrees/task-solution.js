const rotatePaper = (number) => {
  const mirrorMap = {
    0: '0',
    2: '2',
    5: '5',
    6: '9',
    8: '8',
    9: '6',
  };

  let rotatedNumber = '';

  for (let i = number.length - 1; i >= 0; i--) {
    if (!mirrorMap[number[i]]) return false;
    rotatedNumber += mirrorMap[number[i]];
  }

  return rotatedNumber === number;
};
