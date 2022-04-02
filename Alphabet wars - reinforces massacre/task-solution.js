function alphabetWar(reinforces, airstrikes) {
  let currentStr = reinforces[0] + '';
  reinforces = reinforces.slice(1);
  for (let i = 0; i < airstrikes.length; i++) {
    for (let j = 0; j < airstrikes[i].length; j++)
      if (airstrikes[i][j] === '*') {
        if (j - 1 >= 0 && j - 1 < currentStr.length)
          currentStr = currentStr.slice(0, j - 1) + '_' + currentStr.slice(j);
        if (j >= 0 && j < currentStr.length)
          currentStr = currentStr.slice(0, j) + '_' + currentStr.slice(j + 1);
        if (j + 1 >= 0 && j + 1 < currentStr.length)
          currentStr = currentStr.slice(0, j + 1) + '_' + currentStr.slice(j + 2);
      }
    for (let j = 0; j < currentStr.length; j++)
      if (currentStr[j] === '_') {
        for (let k = 0; k < reinforces.length; k++)
          if (reinforces[k][j] !== '_') {
            currentStr = currentStr.slice(0, j) + reinforces[k][j] + currentStr.slice(j + 1);
            reinforces[k] = reinforces[k].slice(0, j) + '_' + reinforces[k].slice(j + 1);
            break;
          }
      }
  }
  return currentStr;
}
