const solution = (mtrx) => {
  for (let i = 0; i < mtrx.length; i++)
    if (mtrx[i].indexOf('>') > -1 && mtrx[i].indexOf('>') < mtrx[i].indexOf('x')) return true;
  return false;
};
