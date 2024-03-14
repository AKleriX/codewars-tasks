String.prototype.capitalize = function () {
  return /[a-z]/.test(this[0])
    ? String.fromCharCode(this[0].charCodeAt(0) - 32) + this.slice(1)
    : this.slice(0);
};
