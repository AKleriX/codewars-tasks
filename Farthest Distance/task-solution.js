const furthestDistance = (arr) =>
  +Math.max(
    ...arr.reduce(
      (a, p1, i, n) => [
        ...a,
        ...n.slice(i + 1).map((p2) => Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2)),
      ],
      [],
    ),
  ).toFixed(2);
