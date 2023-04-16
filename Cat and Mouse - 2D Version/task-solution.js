function catMouse(map, moves) {
  let arrMap = map.split('\n'),
    catPos = [-1, -1],
    mousePos = [-1, -1],
    animalsCounter = 0;
  for (let i = 0; i < arrMap.length; i++)
    for (let j = 0; j < arrMap[i].length; j++)
      if (arrMap[i][j] === 'C') [catPos, animalsCounter] = [[i, j], animalsCounter + 1];
      else if (arrMap[i][j] === 'm') [mousePos, animalsCounter] = [[i, j], animalsCounter + 1];
  if (animalsCounter < 2) return 'boring without two animals';
  return Math.abs(mousePos[0] - catPos[0]) + Math.abs(mousePos[1] - catPos[1]) <= moves
    ? 'Caught!'
    : 'Escaped!';
}
