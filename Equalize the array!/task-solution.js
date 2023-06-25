const equalize = (array) =>
  array.map((n, _, arr) => {
    let dif = n - arr[0];
    return dif >= 0 ? '+' + dif : dif.toString();
  });
