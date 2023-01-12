function uncensor(infected, discovered) {
  let dirIdx = 0,
    currectName = '';
  for (let i = 0; i < infected.length; i++)
    if (infected[i] === '*') currectName += discovered[dirIdx++];
    else currectName += infected[i];
  return currectName;
}
