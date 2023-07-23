const color2grey = function (image /* this is the image in color*/) {
  const res = [];
  for (let i = 0; i < image.length; i++) {
    const row = [];
    for (let j = 0; j < image[i].length; j++) {
      const grayColor = Math.round(image[i][j].reduce((s, n) => s + n, 0) / 3);
      row.push(image[i][j].map((_) => grayColor));
    }
    res.push(row);
  }

  return res; //return image in greyscale
};
