function findScreenHeight(width, ratio) {
  let ratioCoefs = ratio.split(':').map(Number);
  return `${width}x${(width / ratioCoefs[0]) * ratioCoefs[1]}`;
}
