export function growingPlant(up: number, down: number, h: number): number {
  let currentHight: number = up,
    daysCounter: number = 1;
  while (currentHight < h) {
    daysCounter++;
    currentHight += up - down;
  }
  return daysCounter;
}
