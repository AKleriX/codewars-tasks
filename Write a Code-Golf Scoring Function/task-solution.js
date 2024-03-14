const golfScore = (code) => {
  const alph = (code.match(/\w+/g) || []).length,
    notAlph = (code.replace(/\s/g, '').match(/\W/g) || []).length;
  return alph + notAlph;
};
