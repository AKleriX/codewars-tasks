const dateCorrect = (datestring) => {
  if (datestring === '' || !datestring) return datestring;
  else if (!/^\d\d\.\d\d\.\d\d\d\d$/.test(datestring)) return null;
  const [d, m, y] = datestring.split('.'),
    date = new Date(+y, +m - 1, d);
  return `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(
    -2,
  )}.${date.getFullYear()}`;
};
