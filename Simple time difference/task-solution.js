function solve(arr) {
  const seconds = arr
    .map((t) => {
      let hAndM = t.split(':');
      return +hAndM[1] + hAndM[0] * 60;
    })
    .sort((a, b) => a - b);
  let intervals = [24 * 60 + seconds[0] - seconds[seconds.length - 1] - 1];
  for (let i = 1; i < seconds.length; i++) intervals.push(seconds[i] - seconds[i - 1] - 1);
  let max = Math.max.apply(null, intervals);
  return `${addZero(Math.floor(max / 60))}:${addZero(Math.floor(max % 60))}`;
}

const addZero = (n) => (n < 10 ? '0' + n : n.toString());
