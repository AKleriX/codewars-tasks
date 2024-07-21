Number.prototype.times = function (f) {
  if (typeof f !== 'function') throw new TypeError('Callback must be a function');

  let n = Math.round(this);

  if (n <= 0) return;

  for (let i = 0; i < n; i++) f();
};
