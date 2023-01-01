const circleArea = (radius) =>
  radius <= 0 || isNaN(Number(radius)) ? false : Math.round(Math.PI * radius ** 2 * 100) / 100;
