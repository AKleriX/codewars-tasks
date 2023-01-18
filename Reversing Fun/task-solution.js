function flipNumber(n) {
  let arr = [...n];
  for (let i = 0; i < arr.length; i++) arr = arr.slice(0, i).concat(arr.slice(i).reverse());
  return arr.join('');
}
