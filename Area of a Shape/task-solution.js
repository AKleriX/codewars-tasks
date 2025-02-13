const area_of_the_shape = (f) => {
  let inside = 0;
  for (let i = 0; i < 100000; i++) {
    let x = Math.random(),
      y = Math.random();
    if (f(x, y)) inside++;
  }
  return inside / 100000;
};
