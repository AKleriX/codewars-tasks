function triangleArea(triangle) {
  let AB = Math.sqrt((triangle.b.x - triangle.a.x) ** 2 + (triangle.b.y - triangle.a.y) ** 2),
    AC = Math.sqrt((triangle.c.x - triangle.a.x) ** 2 + (triangle.c.y - triangle.a.y) ** 2),
    CB = Math.sqrt((triangle.b.x - triangle.c.x) ** 2 + (triangle.b.y - triangle.c.y) ** 2),
    p = (AB + AC + CB) / 2,
    s = Math.sqrt(p * (p - AB) * (p - AC) * (p - CB));
  return Math.round(s * 10 ** 6) / 10 ** 6;
}
