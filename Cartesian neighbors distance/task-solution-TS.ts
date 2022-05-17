export function cartesianNeighborsDistance(x: number, y: number, range: number): number[] {
  let uniqDist: Set<number> = new Set();
  for (let i = 1; i <= range; i++) {
    uniqDist.add(Math.round(Math.sqrt((x - (x + i)) ** 2) * 10 ** 10) / 10 ** 10);
    uniqDist.add(Math.round(Math.sqrt((y - (y + i)) ** 2) * 10 ** 10) / 10 ** 10);
    for (let j = 1; j <= range; j++)
      uniqDist.add(
        Math.round(Math.sqrt((x - (x + j)) ** 2 + (y - (y + i)) ** 2) * 10 ** 10) / 10 ** 10,
      );
  }
  return Array.from(uniqDist).sort((a, b) => a - b);
}
