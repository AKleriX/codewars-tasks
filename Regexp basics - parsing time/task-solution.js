String.prototype.toSeconds = function () {
  let match = this.match(/^(\d{2}):([0-5]\d):([0-5]\d)$/);
  return match
    ? match
        .slice(1, 4)
        .reverse()
        .reduce((sec, time, i) => sec + Number(time) * 60 ** i, 0)
    : null;
};
