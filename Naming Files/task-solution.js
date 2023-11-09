const nameFile = (fmt, nbr, start) => {
  let res = [];
  if (start % 1) return [];
  for (let i = start, j = 1; j <= nbr; j++, i++) res.push(fmt.replaceAll('<index_no>', i));
  return res;
};
