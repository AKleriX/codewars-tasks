const caffeineBuzz = (n) => {
  let res = '';
  if (!(n % 3) && !(n % 4)) res = 'Coffee';
  else if (!(n % 3)) res = 'Java';
  if (!(n % 2) && res.length > 0) res += 'Script';
  else if (res.length === 0) res = 'mocha_missing!';
  return res;
};
