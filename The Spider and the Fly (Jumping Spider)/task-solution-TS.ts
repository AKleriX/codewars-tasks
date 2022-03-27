export function spiderToFly(spider: string, fly: string): number {
  const spiderA: number = Number(spider[1]),
    flyA: number = Number(fly[1]),
    ang: string = 'CBAHGFED',
    posY: number = Math.abs(ang.indexOf(spider[0]) - ang.indexOf(fly[0])) * 45;
  return Math.sqrt(
    spiderA ** 2 + flyA ** 2 - 2 * spiderA * flyA * Math.cos(posY / (180 / Math.PI)),
  );
}
