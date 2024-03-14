const countMissingCarriages = (train) => {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let counter = 0,
    idx = 0;
  for (let i = 0; i < train.length; i++, idx++)
    while (abc[idx] !== train[i]) {
      counter++;
      idx++;
    }
  return counter;
};
