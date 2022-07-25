function logisticMap(width, height, xs, ys) {
  let map = [];
  for (let i = 0; i < height; i++) {
    map.push([]);
    for (let j = 0; j < width; j++)
      map[i].push(
        xs.length
          ? Math.min.apply(
              null,
              xs.map((x, idx) => Math.abs(x - j) + Math.abs(ys[idx] - i)),
            )
          : null,
      );
  }
  return map;
}
