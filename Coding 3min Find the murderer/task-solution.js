const sc = (said, suspects) => {
  const re = new RegExp('^' + said.replace(/~/g, '.'), 'i');
  return suspects.filter((s) => re.test(s)).join(',');
};
