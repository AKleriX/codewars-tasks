function ride(group, comet) {
  const gCode = [...group].reduce(getMulLetters, 1),
    cCode = [...comet].reduce(getMulLetters, 1);
  return gCode % 47 === cCode % 47 ? 'GO' : 'STAY';
}

const getMulLetters = (mul, letter) => mul * (letter.charCodeAt() - 64);
