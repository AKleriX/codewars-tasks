const countPresents = (prod, presents) => {
  const timeInSeconds = presents.map((time) => {
    const [hh, mm, ss] = time.split(':').map(Number);
    return hh * 3600 + mm * 60 + ss;
  });

  timeInSeconds.sort((a, b) => a - b);

  const totalCapacity = Object.values(prod).reduce((sum, p) => sum + p, 0) * 86400;

  let count = 0,
    usedCapacity = 0;

  for (const time of timeInSeconds)
    if (usedCapacity + time <= totalCapacity) {
      usedCapacity += time;
      count++;
    } else break;

  return count;
};
