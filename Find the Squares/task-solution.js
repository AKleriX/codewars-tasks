const findSquares = (num) => {
  let squares = '2-1';
  for (let i = 2; i < num; i++)
    if ((i + 1) ** 2 - i ** 2 === num) {
      squares = `${(i + 1) ** 2}-${i ** 2}`;
      break;
    }
  return squares;
};
