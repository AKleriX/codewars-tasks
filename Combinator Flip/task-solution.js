const flip =
  (fn) =>
  (...args) =>
    fn(...args.reverse());
