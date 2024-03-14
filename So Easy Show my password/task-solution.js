const showMyPassword = (birthdays) => {
  const [d, m, j, g] = birthdays
    .map((d) => [d, new Date(d).getTime()])
    .sort((a, b) => a[1] - b[1])
    .map((d) => d[0]);
  return `${j.split('-')[0].slice(-2)}${g.split('-')[0].slice(-2)}${('0' + d.split('-')[1]).slice(
    -2,
  )}${('0' + m.split('-')[2]).slice(-2)}`;
};
