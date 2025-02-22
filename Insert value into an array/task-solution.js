Object.defineProperty(Array.prototype, 'insert', {
  value: function (index, value) {
    this.splice(index < this.length ? index : this.length, 0, value);
    return this;
  },
  enumerable: false,
});
