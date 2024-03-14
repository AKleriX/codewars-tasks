const mapVector = (vector, circle1, circle2) =>
  vector.map((c, i) => (c - circle1[i]) * (circle2[2] / circle1[2]) + circle2[i]);
