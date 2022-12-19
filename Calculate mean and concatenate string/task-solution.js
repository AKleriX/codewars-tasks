const mean = (lst) =>
  lst
    .reduce((arr, el) => (/\d/.test(el) ? (arr[0] += +el) : (arr[1] += el), arr), [0, ''])
    .map((el, i) => (i ? el : el / 10));
