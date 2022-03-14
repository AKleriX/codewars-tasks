//Return true if point is inside poly, and false if it is not
function pointInPoly(poly, point) {
  let j = poly.length - 1,
    inside = false;
  for (let i = 0; i < poly.length; i++) {
    inside =
      poly[i][1] > point[1] !== poly[j][1] > point[1] &&
      point[0] <
        ((poly[j][0] - poly[i][0]) * (point[1] - poly[i][1])) / (poly[j][1] - poly[i][1]) +
          poly[i][0]
        ? !inside
        : inside;
    j = i;
  }
  return inside;
}
