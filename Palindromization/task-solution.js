function palindromization(element, n) {
  if (element === '' || n < 2) return 'Error!';
  let pal = [];
  for (let i = 0; i < Math.ceil(n / 2); i++) pal.push(element[i % element.length]);
  return pal.concat(pal.slice(0, pal.length - (n % 2 ? 1 : 0)).reverse()).join('');
}
