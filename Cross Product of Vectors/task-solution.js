const crossProduct = (...args) => {
  if (
    !Array.isArray(args[0]) ||
    !Array.isArray(args[1]) ||
    args.length !== 2 ||
    args[0].length !== 3 ||
    args[1].length !== 3
  )
    throw 'Arguments are not 3D vectors!';
  return [
    args[0][1] * args[1][2] - args[0][2] * args[1][1],
    -(args[0][0] * args[1][2] - args[0][2] * args[1][0]) || 0,
    args[0][0] * args[1][1] - args[0][1] * args[1][0],
  ];
};
