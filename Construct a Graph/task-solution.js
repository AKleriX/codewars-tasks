const constructGraph = (points) => {
  const hasOrigin = points.some((p) => p.x === 0 && p.y === 0);
  if (!hasOrigin) points.push({ x: 0, y: 0 });

  const xs = points.map((p) => p.x),
    ys = points.map((p) => p.y),
    minX = Math.min(...xs),
    maxX = Math.max(...xs),
    minY = Math.min(...ys),
    maxY = Math.max(...ys),
    width = maxX - minX + 1,
    height = maxY - minY + 1,
    graph = Array.from({ length: height }, () => Array(width).fill(' '));

  for (let y = minY; y <= maxY; y++)
    for (let x = minX; x <= maxX; x++) {
      const screenX = x - minX,
        screenY = maxY - y;

      if (x === 0 && y === 0) graph[screenY][screenX] = hasOrigin ? '*' : '+';
      else if (x === 0) graph[screenY][screenX] = '|';
      else if (y === 0) graph[screenY][screenX] = '-';
    }

  points.forEach(({ x, y }) => {
    const screenX = x - minX,
      screenY = maxY - y;
    if (!(x === 0 && y === 0)) graph[screenY][screenX] = '*';
  });

  return graph;
};
