function selReverse(array, length) {
  if (!length) return array;
  let rev = [];
  for (let i = 0; i < array.length; i += length)
    for (let j = i + length - 1; j >= i; j--) if (array[j] !== undefined) rev.push(array[j]);
  return rev;
}
