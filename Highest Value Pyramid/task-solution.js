function pyramid(stones) {
  const countMap = {};
  stones.forEach((stone) => {
    countMap[stone] = (countMap[stone] || 0) + 1;
  });

  const uniqueStones = Object.keys(countMap)
    .map(Number)
    .sort((a, b) => b - a);

  for (let i = 0; i < uniqueStones.length; i++) {
    const bottom = uniqueStones[i];
    if (countMap[bottom] < 3) continue;
    for (let j = 0; j < uniqueStones.length; j++) {
      const middle = uniqueStones[j];
      if (middle === bottom || countMap[middle] < 2) continue;
      for (let k = 0; k < uniqueStones.length; k++) {
        const top = uniqueStones[k];
        if (top === bottom || top === middle || countMap[top] < 1) continue;

        return bottom * 3 + middle * 2 + top;
      }
    }
  }
  return null;
}
