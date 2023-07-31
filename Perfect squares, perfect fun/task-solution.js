const squareIt = (int) => {
  const sq = Math.sqrt(int.toString().length);
  return sq % 1
    ? 'Not a perfect square!'
    : int
        .toString()
        .match(new RegExp('.{' + sq + '}', 'g'))
        .join('\n');
};
