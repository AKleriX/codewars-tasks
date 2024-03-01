const halfIt = (n) => {
  if (typeof n !== 'number') return 0;
  let str = n.toString(),
    newStr = '';
  for (let i = 0; i < str.length; i++)
    if (/\d/.test(str[i])) newStr += Math.round(+str[i] / 2);
    else if (str[i] === '-') {
      newStr += -Math.round(+str[i + 1] / 2);
      i++;
    } else newStr += str[i];
  return +newStr;
};
