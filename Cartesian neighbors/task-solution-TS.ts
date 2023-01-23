export function cartesianNeighbor(x: number, y: number): number[][] {
  let cords: number[][] = [];
  for (let i = x - 1; i <= x + 1; i++)
    for (let j = y - 1; j <= y + 1; j++) if (i !== x || j !== y) cords.push([i, j]);
  return cords;
}
