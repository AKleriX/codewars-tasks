const elipse = (a, b) => {
  let area = Math.PI * a * b,
    perimeter = Math.PI * (1.5 * (a + b) - Math.sqrt(a * b));

  area = area.toFixed(1);
  perimeter = perimeter.toFixed(1);

  return `Area: ${area}, perimeter: ${perimeter}`;
};
