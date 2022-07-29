function connectTheDots(paper) {
  let letters = [...paper.replace(/\s+/g, '')].sort().join(''),
    paperArr = paper
      .slice(0, -1)
      .split('\n')
      .map((s) => [...s]),
    cords = {},
    currentPoint = [];
  for (let i = 0; i < paperArr.length; i++)
    for (let j = 0; j < paperArr[i].length; j++)
      if (letters.includes(paperArr[i][j])) cords[paperArr[i][j]] = [i, j];
  for (let l of letters) {
    if (!currentPoint.length) currentPoint = cords[l];
    else {
      let i = currentPoint[0],
        j = currentPoint[1];
      while (i !== cords[l][0] || j !== cords[l][1]) {
        paperArr[i][j] = '*';
        if (i < cords[l][0]) i++;
        else if (i > cords[l][0]) i--;
        if (j < cords[l][1]) j++;
        else if (j > cords[l][1]) j--;
      }
      paperArr[i][j] = '*';
      currentPoint = cords[l];
    }
  }
  return paperArr.map((r) => r.join('')).join('\n') + '\n';
}
