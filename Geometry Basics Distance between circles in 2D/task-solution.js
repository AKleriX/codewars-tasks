const distanceBetweenCircles = (a, b) => {
  const d =
    Math.sqrt((a.center.x - b.center.x) ** 2 + (a.center.y - b.center.y) ** 2) -
    (a.radius + b.radius);
  return d > 0 ? d : 0;
};
