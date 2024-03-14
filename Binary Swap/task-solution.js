const binarySwap = (input) => {
  if (typeof input === 'function') return binarySwap(input());
  if (Array.isArray(input))
    return input.length === 1
      ? binarySwap(input[0])
      : input.length === 2
      ? [binarySwap(input[0]), binarySwap(input.slice(1))]
      : [binarySwap(input[0]), ...binarySwap(input.slice(1))];
  return +input === 0 ? 1 : 0;
};
