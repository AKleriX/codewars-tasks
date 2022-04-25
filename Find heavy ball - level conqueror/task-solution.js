function findBall(scales) {
  if (scales.getWeight([0, 1, 2, 3], [4, 5, 6, 7]) === -1) {
    if (scales.getWeight([0, 1], [2, 3]) === -1) {
      if (scales.getWeight([0], [1]) === -1) return 0;
      return 1;
    } else {
      if (scales.getWeight([2], [3]) === -1) return 2;
      return 3;
    }
  } else {
    if (scales.getWeight([4, 5], [6, 7]) === -1) {
      if (scales.getWeight([4], [5]) === -1) return 4;
      return 5;
    } else {
      if (scales.getWeight([6], [7]) === -1) return 6;
      return 7;
    }
  }
}
