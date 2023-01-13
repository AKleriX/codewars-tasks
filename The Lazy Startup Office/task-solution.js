const binRota = (arr) =>
  arr.reduce((queue, row, i) => queue.concat(i % 2 ? [...row].reverse() : row), []);
