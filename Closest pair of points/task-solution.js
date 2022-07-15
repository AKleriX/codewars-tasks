function closestPair(points) {
  let minDist = Infinity,
    cords = [];
  for (let i = 0; i < points.length; i++)
    for (let j = i + 1; j < points.length; j++) {
      let currentDist = getDist(points[i], points[j]);
      if (minDist > currentDist) {
        minDist = currentDist;
        cords = [points[i], points[j]];
      }
    }
  return cords;
}

const getDist = ([x1, y1], [x2, y2]) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
