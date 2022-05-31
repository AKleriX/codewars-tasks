intervalInsert = function (myl, interval) {
  let closedIntervals = [],
    int = [...interval];
  for (let i = 0; i < myl.length; i++) {
    let currentInterval = [...myl[i]];
    if (int) {
      if (currentInterval[1] < int[0]) closedIntervals.push(currentInterval);
      else if (int[1] < currentInterval[0]) {
        closedIntervals.push(int);
        closedIntervals.push(currentInterval);
        int = null;
      } else {
        let min = Math.min(int[0], currentInterval[0]);
        for (; i < myl.length && myl[i][0] <= int[1]; i++);
        let max = Math.max(int[1], myl[i - 1][1]);
        i--;
        closedIntervals.push([min, max]);
        int = null;
      }
    } else closedIntervals.push(currentInterval);
  }
  if (int) closedIntervals.push(int);
  return closedIntervals;
};
