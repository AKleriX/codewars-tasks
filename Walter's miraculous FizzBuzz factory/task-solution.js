function fizzBuzzFactory(arr) {
  return function (n) {
    for (let i = arr.length - 1; i >= 0; i--) if (!(n % arr[i][0])) return arr[i][1];
    return n.toString();
  };
}
