const makeLazy =
  (f, ...args) =>
  () =>
    f(...args);
