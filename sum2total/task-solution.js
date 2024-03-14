const total = (arr) =>
  arr.length > 1 ? total(arr.reduce((a, v, i) => (!i ? a : [...a, v + arr[i - 1]]), [])) : arr[0];
