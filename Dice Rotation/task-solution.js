const rotations = (dieArray) => {
  const dict = [5, 4, 3, 2, 1, 0];
  return Math.min(
    ...dieArray.reduce(
      (c, s) => c.map((v, i) => v + (dict[s - 1] === i) + (i !== s - 1)),
      [0, 0, 0, 0, 0, 0],
    ),
  );
};
