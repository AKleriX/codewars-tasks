Object.defineProperties(Person.prototype, {
  name: {
    get: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    set: function (value) {
      [this.firstName, this.lastName] = value.split(' ');
    },
  },
});
