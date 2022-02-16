export function areaOfPolygonInsideCircle(circleRadius: number, numberOfSides: number): number {
    let a: number = 2 * circleRadius * Math.sin(Math.PI/numberOfSides),
        r: number = circleRadius * Math.cos(Math.PI/numberOfSides);
    return Math.round((0.5 * a * numberOfSides * r) * 1000) / 1000;
  }