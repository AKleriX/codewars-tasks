function once(fn) {
  let used = false;
  return function () {
    if (!used) {
      used = true;
      return fn(...arguments);
    }
  };
}
