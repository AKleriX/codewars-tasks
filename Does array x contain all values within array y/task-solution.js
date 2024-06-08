Object.defineProperty(Array.prototype, 'containsAll', {
  value: function containsAll(a) {
    return a.every((el) => this.includes(el));
  },
});
