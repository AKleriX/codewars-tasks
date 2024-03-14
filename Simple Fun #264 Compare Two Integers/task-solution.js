const compareIntegers = (a, b) => {
  if (a.length > b.length) return 'greater';
  else if (a.length < b.length) return 'less';
  for (let i = 0; i < a.length; i++)
    if (a[i] > b[i]) return 'greater';
    else if (a[i] < b[i]) return 'less';
  return 'equal';
};
