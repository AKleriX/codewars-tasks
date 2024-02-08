const didWeWin = (plays) => {
  let counter = 0;
  for (let i = 0; i < plays.length; i++)
    if (plays[i].length)
      if (plays[i][1] === 'turnover') return false;
      else if (plays[i][1] === 'run' || plays[i][1] === 'pass') counter += plays[i][0];
      else counter -= plays[i][0];
  return counter > 10;
};
