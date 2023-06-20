const trianglePerimeter = (triangle) =>
  Math.sqrt((triangle.a.x - triangle.b.x) ** 2 + (triangle.a.y - triangle.b.y) ** 2) +
  Math.sqrt((triangle.a.x - triangle.c.x) ** 2 + (triangle.a.y - triangle.c.y) ** 2) +
  Math.sqrt((triangle.b.x - triangle.c.x) ** 2 + (triangle.b.y - triangle.c.y) ** 2);
