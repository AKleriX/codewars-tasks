const ultimateReverse = (s) => {
  let revStr = [...s.join('')].reverse().join(''),
    resArr = [];
  for (let i = 0, pos = 0; i < s.length; pos += s[i].length, i++)
    resArr.push(revStr.slice(pos, pos + s[i].length));
  return resArr;
};
