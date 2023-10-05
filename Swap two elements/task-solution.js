const swapTwo = (array, a, b) => {
  const aPos = array.indexOf(a),
    bPos = array.lastIndexOf(b);
  return [...array].map((v, i) => (i === aPos ? b : i === bPos ? a : v));
};
