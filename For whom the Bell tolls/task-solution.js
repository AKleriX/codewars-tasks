function bell(n) {
  let length = Math.ceil(n / 2),
    arr = [];
  for (let i = 0; i < length; i++) arr.push(n * (i + 1) - (i ** 2 + i));
  return arr.concat(arr.slice(0, n % 2 ? -1 : arr.length).reverse());
}
