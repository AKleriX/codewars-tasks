const sortLetters = (p) => {
  const v = [],
    c = [];
  for (let i = 0; i < p.length; i++)
    for (let j = 0; j < p[i].length; j++)
      if (/[aeoui]/i.test(p[i][j])) v.push(p[i][j].toUpperCase());
      else if (/[qwrtypsdfghjklzxcbnmv]/i.test(p[i][j])) c.push(p[i][j].toUpperCase());
  return [v, c];
};
