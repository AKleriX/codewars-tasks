const boxBlur = (image) => {
  let res = [];
  for (let i = 1; i < image.length - 1; i++) {
    let row = [];
    for (let j = 1; j < image[0].length - 1; j++) {
      let sum = 0;
      for (let di = -1; di <= 1; di++)
        for (let dj = -1; dj <= 1; dj++) sum += image[i + di][j + dj];
      row.push(Math.floor(sum / 9));
    }
    res.push(row);
  }
  return res;
};
