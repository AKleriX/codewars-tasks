const fixParentheses = (str) => {
  let op = 0,
    c = 0;
  for (let i = 0; i < str.length; i++)
    if (str[i] === ')')
      if (!c) op++;
      else c--;
    else c++;
  return '('.repeat(op) + str + ')'.repeat(c);
};
