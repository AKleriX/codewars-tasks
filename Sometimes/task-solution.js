function sometimes(fn) {
  let counter = 0;
  return function (...args) {
    counter++;
    if (counter <= 3 || counter % 2) return fn(...args);
    return "hmm, I don't know!";
  };
}
