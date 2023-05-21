const sortItOut = (array) =>
  array.sort((a, b) => {
    let aC = Math.floor(a),
      bC = Math.floor(b);
    return aC % 2 && bC % 2 ? a - b : !(aC % 2) && !(bC % 2) ? b - a : !(aC % 2) && bC % 2 ? 1 : -1;
  });
