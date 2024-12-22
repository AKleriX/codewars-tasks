const canalMania = (lowQueue, highQueue, maxLength) => {
  let currentSide = 0,
    totalTime = 0,
    f = (x) => x.reduce((a, c) => a + c, 0);

  while (lowQueue.length || highQueue.length) {
    let lockContents = [];

    while (true) {
      const currentQueue = currentSide === 0 ? lowQueue : highQueue,
        nextBoat = currentQueue[0] || 0;

      if (f([...lockContents, nextBoat]) > maxLength) break;

      lockContents.push(currentQueue.shift() || 0);

      if (currentQueue.length === 0) break;
    }

    const transitTime = f(lockContents) * 2;
    totalTime += transitTime + 2;

    currentSide = 1 - currentSide;
  }

  if (currentSide === 1) totalTime += 2;

  return totalTime;
};
