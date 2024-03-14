const getGridNumber = (width, height, x, y) => (y - 1) * width + x;

const getXYPosition = (width, height, number) => {
  let y = Math.ceil(number / width),
    x = number % width ? number % width : width;
  return {
    x: x,
    y: y,
  };
};
