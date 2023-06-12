function counter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}
