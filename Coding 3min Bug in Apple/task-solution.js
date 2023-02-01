function sc(apple) {
  let bPos = [0, 0];
  for (let i = 0; i < apple.length; i++)
    for (let j = 0; j < apple[i].length; j++)
      if (apple[i][j] === 'B') {
        bPos = [i, j];
        break;
      }
  return bPos;
}
