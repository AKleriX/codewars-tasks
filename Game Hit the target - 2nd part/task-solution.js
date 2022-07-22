const solution = (mtrx) => {
  let dirPos = [0, 0],
    targetPos = [0, 0],
    res = false;
  for (let i = 0; i < mtrx.length; i++)
    for (let j = 0; j < mtrx[i].length; j++)
      if (mtrx[i][j] === 'x') targetPos = [i, j];
      else if (/[\^<>v]/.test(mtrx[i][j])) dirPos = [i, j];
  switch (mtrx[dirPos[0]][dirPos[1]]) {
    case '^':
      res = targetPos[0] < dirPos[0] && targetPos[1] === dirPos[1];
      break;
    case '>':
      res = targetPos[0] === dirPos[0] && targetPos[1] > dirPos[1];
      break;
    case 'v':
      res = targetPos[0] > dirPos[0] && targetPos[1] === dirPos[1];
      break;
    case '<':
      return targetPos[0] === dirPos[0] && targetPos[1] < dirPos[1];
      break;
  }
  return res;
};
