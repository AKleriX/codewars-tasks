const drawRectangle = (canvas, [x1, y1, x2, y2]) =>
  canvas.map((r, y) =>
    r.map((c, x) =>
      (y === y1 || y === y2) && x > x1 && x < x2
        ? '-'
        : (x === x1 || x === x2) && y > y1 && y < y2
        ? '|'
        : (x === x1 || x === x2) && (y === y1 || y === y2)
        ? '*'
        : c,
    ),
  );
