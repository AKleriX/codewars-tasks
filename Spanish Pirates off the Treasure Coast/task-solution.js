const secretMap = (sp) => {
  let p = 0,
    g = 0;
  for (let i = 0; i < sp.length; i++)
    if (sp[i][0] === 'pirate') p++;
    else if (sp[i][0] === 'pile_of_gold') g++;
  return `count of pirates: ${p} and the count of gold piles: ${g}`;
};
