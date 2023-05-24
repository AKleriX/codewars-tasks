const toBinary = (n) =>
  n >= 0
    ? n.toString(2)
    : (
        parseInt(
          [...Math.abs(n).toString(2).padStart(32, '0')]
            .map((d) => (d === '1' ? '0' : '1'))
            .join(''),
          2,
        ) + 1
      ).toString(2);
