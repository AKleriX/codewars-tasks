function crap(x, bags, cap) {
  let counter = bags * cap;
  for (let i = 0; i < x.length; i++)
    for (let j = 0; j < x[i].length; j++)
      if (x[i][j] === '@') counter--;
      else if (x[i][j] === 'D') return 'Dog!!';
  return counter < 0 ? 'Cr@p' : 'Clean';
}
