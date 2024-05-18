const axisAlignedBoundingBox = (x, y) =>
  (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
