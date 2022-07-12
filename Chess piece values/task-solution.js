function piecesValue(arr, s) {
  const player = s === 'white' ? 'w' : 'b';
  let score = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr[i].length; j++)
      if (arr[i][j][0] === player && arr[i][j].slice(2) !== 'king')
        score += hash[arr[i][j].slice(2)];
  return score;
}
