const convert = (num) =>
  num
    .match(/../g)
    .map((n) => String.fromCharCode(+n))
    .join('');
