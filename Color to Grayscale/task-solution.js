const rgbToGrayscale = (color) => {
  const y =
    0.299 * parseInt(color.slice(1, 3), 16) +
    0.587 * parseInt(color.slice(3, 5), 16) +
    0.114 * parseInt(color.slice(5), 16);
  return `#${(0 + Math.round(y).toString(16)).slice(-2).repeat(3)}`;
};
