const deathStar = (week) => {
  const needMat = [100, 75, 50];
  for (let i = 0; i < week[7]; i++)
    [needMat[0], needMat[1], needMat[2]] = [
      needMat[0] - week[i][0],
      needMat[1] - week[i][1],
      needMat[2] - week[i][2],
    ];
  return needMat.every((v) => v <= 0)
    ? 'The station is completed!'
    : `The station is destroyed! It needed ${needMat[0] < 0 ? 0 : needMat[0]} iron, ${
        needMat[1] < 0 ? 0 : needMat[1]
      } steel and ${needMat[2] < 0 ? 0 : needMat[2]} chromium for completion.`;
};
