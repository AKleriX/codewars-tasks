Guesser.prototype.getNumber = function () {
  let low = 1,
    high = 1000;

  for (let i = 0; i < 10; i++) {
    let mid = Math.floor((low + high) / 2),
      result = this.guess(mid);

    if (result === 'Correct!') return mid;
    else if (result === 'Too high!') high = mid - 1;
    else if (result === 'Too low!') low = mid + 1;
  }

  throw new Error('Exceeded number of attempts');
};
