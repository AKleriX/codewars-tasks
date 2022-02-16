function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    let a = 2 * circleRadius * Math.sin(Math.PI/numberOfSides),
        r = circleRadius * Math.cos(Math.PI/numberOfSides);
    return Math.round((0.5 * a * numberOfSides * r) * 1000) / 1000;
  }