export const mapVector = (
  vector: [number, number],
  circle1: [number, number, number],
  circle2: [number, number, number],
): [number, number] => [
  (vector[0] - circle1[0]) * (circle2[2] / circle1[2]) + circle2[0],
  (vector[1] - circle1[1]) * (circle2[2] / circle1[2]) + circle2[1],
];
