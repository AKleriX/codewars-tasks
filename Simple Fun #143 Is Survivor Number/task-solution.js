const survivor = (n) => {
  let position = n;
  for (let step = 2; position >= step; step++) {
    if (!(position % step)) return false;
    position -= Math.floor(position / step);
  }
  return true;
};
