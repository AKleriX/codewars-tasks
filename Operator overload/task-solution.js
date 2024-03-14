const Foo = function (value) {
  this.val = value;

  this.toString = function () {
    return this.val;
  };
};
