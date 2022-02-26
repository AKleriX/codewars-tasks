const solve = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++)
    if (Number(s[i]) % 2) count  += i + 1; 
  return count;
};