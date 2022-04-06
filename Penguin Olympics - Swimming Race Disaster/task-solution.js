function calculateWinners(snapshot, penguins) {
  let lanes = snapshot.split('\n'),
    namesAndDist = [];
  for (let i = 0; i < lanes.length; i++) {
    let dist = 0,
      pIndex = lanes[i].includes('p') ? lanes[i].indexOf('p') : lanes[i].indexOf('P');
    for (let j = pIndex + 1; j < lanes[i].length; j++) dist += lanes[i][j] === '~' ? 2 : 1;
    namesAndDist[i] = [penguins[i], dist];
  }
  namesAndDist.sort((a, b) => a[1] - b[1]);
  return `GOLD: ${namesAndDist[0][0]}, SILVER: ${namesAndDist[1][0]}, BRONZE: ${namesAndDist[2][0]}`;
}
