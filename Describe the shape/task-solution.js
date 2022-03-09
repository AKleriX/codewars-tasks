function describeTheShape(angles) {
  if (angles < 3) return `this will be a line segment or a dot`;
  return `This shape has ${angles} sides and each angle measures ${Math.trunc(
    (180 * (angles - 2)) / angles,
  )}`;
}
