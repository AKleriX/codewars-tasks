const addArrays = (array1, array2) => {
  if (array1.length !== array2.length) throw new Error('Wrong length');
  return array1.map((el, i) => el + array2[i]);
};
