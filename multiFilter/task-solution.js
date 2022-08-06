const multiFilter = function (...fns) {
  return function (el) {
    return fns.every((f) => f(el));
  };
};
