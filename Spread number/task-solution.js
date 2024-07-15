Number.prototype[Symbol.iterator] = function* () {
  for (let i = 1; i <= this; i++) yield i;
};
