function onLine(points) {
  if (points.every((p) => p[0] === points[0][0]) || points.every((p) => p[1] === points[0][1]))
    return true;
  for (let i = 2; i < points.length; i++)
    if (
      (points[i][0] - points[i - 2][0]) / (points[i - 1][0] - points[i - 2][0]) !==
      (points[i][1] - points[i - 2][1]) / (points[i - 1][1] - points[i - 2][1])
    )
      return false;
  return true;
}
