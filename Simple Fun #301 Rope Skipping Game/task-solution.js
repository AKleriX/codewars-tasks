const tiaosheng = (failedCount) => {
  let time,
    jumps = 60;

  for (let i = 0; i < failedCount.length; i++) {
    const val = failedCount[i];
    time = val + 3 * i;

    if (time < 57) jumps = val - 3 * (i + 1);
    else if (time >= 57 && time <= 60) return val;
    else return 60 - 3 * i;
  }

  return time < 57 ? 60 - 3 * failedCount.length : jumps;
};
