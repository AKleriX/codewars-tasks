const range = (...args) => {
  let start = args.length === 1 ? 1 : args[0],
    step = args.length === 3 ? args[1] : 1,
    stop = args.length === 1 ? args[0] : args.length === 2 ? args[1] : args[2];
  return Array.from({ length: Math.round((stop - start) / step) + 1 }, (_, i) => start + i * step);
};
