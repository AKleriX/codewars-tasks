const playerManager = (players) =>
  players
    ? players
        .split(', ')
        .reduce(
          (l, d, i, arr) => (i % 2 ? l : (l.push({ player: d, contact: +arr[i + 1] }), l)),
          [],
        )
    : [];
