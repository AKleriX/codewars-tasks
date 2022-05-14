function findArea(points) {
  let area = 0;
  for (let i = 1; i < points.length; i++)
    area += ((points[i - 1].Y + points[i].Y) / 2) * (points[i].X - points[i - 1].X);
  return area;
}
