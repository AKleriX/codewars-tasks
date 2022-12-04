const lostSheep = (friday, saturday, total) =>
  total - friday.concat(saturday).reduce((s, n) => s + n, 0);
