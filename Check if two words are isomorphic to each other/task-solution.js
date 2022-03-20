function isomorph(a, b) {
  return convertStrToInt(a) === convertStrToInt(b);
}

const convertStrToInt = (str) => {
  let letters = [],
    currentNumStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!letters.includes(str[i])) {
      if (!letters[1]) letters[1] = str[i];
      else if (!letters[0]) letters[0] = str[i];
      else letters.push(str[i]);
    }
    currentNumStr += letters.indexOf(str[i]);
  }
  return Number(currentNumStr);
};
