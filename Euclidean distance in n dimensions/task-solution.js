const euclideanDistance = (point1, point2) =>
  +(point1.reduce((s, v, i) => s + (v - point2[i]) ** 2, 0) ** (1 / 2)).toFixed(2);
