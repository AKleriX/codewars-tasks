function reverseInvert(array) {
  let res = [];
  for (let i = 0; i < array.length; i++)
    if (typeof array[i] === 'number' && !(array[i] % 1))
      res.push(+[...Math.abs(array[i]).toString()].reverse().join('') * (array[i] > 0 ? -1 : 1));
  return res;
}
