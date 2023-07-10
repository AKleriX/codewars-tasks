const sing = () => {
  const res = [];
  for (let i = 99; i > 0; i--)
    res.push(
      `${i} bottle${i !== 1 ? 's' : ''} of beer on the wall, ${i} bottle${
        i !== 1 ? 's' : ''
      } of beer.`,
      `Take one down and pass it around, ${i - 1 ? i - 1 : 'no more'} bottle${
        i - 1 !== 1 ? 's' : ''
      } of beer on the wall.`,
    );
  res.push(
    `No more bottles of beer on the wall, no more bottles of beer.`,
    `Go to the store and buy some more, 99 bottles of beer on the wall.`,
  );
  return res;
};
