const shapeArea = (n) => (n === 1 ? 1 : n * 2 + (n - 2) * 2 + shapeArea(n - 1));
