const vowelStart = (str) => {
  let res = [],
    currentStr = '';
  for (let i = 0; i < str.length; i++) {
    if (/[aeoui]/i.test(str[i])) {
      if (currentStr.length) res.push(currentStr.toLowerCase());
      currentStr = '';
    }
    if (/[a-z0-9]/i.test(str[i])) currentStr += str[i];
  }
  res.push(currentStr.toLowerCase());
  return res.join(' ');
};
