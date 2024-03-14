const process2Arrays = (arr1, arr2) => [
  arr1.length + arr2.length - new Set([...arr1, ...arr2]).size,
  [...new Set([...arr1, ...arr2])].filter((el) => !(arr1.includes(el) && arr2.includes(el))).length,
  new Set([...arr1, ...arr2]).size - arr2.length,
  new Set([...arr1, ...arr2]).size - arr1.length,
];
