function rndCode() {
  const letters = 'ABCDEFGHIJKLM',
    symbols = '~!@#$%^&*';
  let res = '';
  for (let i = 0; i < 8; i++)
    if (i < 2) res += letters[getRandomInt(0, 13)];
    else if (i < 6) res += getRandomInt(0, 10);
    else res += symbols[getRandomInt(0, 9)];
  return res;
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
