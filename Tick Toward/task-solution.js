function tickToward(start, end) {
  let [x, y] = start,
    route = [[x, y]];
  while (x !== end[0] || y !== end[1]) {
    x += x < end[0] ? 1 : x > end[0] ? -1 : 0;
    y += y < end[1] ? 1 : y > end[1] ? -1 : 0;
    route.push([x, y]);
  }
  return route;
}
