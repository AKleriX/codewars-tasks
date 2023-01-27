const filterHomogenous = (arrays) =>
  arrays.filter((a) => a.length && a.every((el, _, arr) => typeof el === typeof arr[0]));
