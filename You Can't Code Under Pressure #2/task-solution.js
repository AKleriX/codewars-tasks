function Counter() {
  this.num = 0;
  this.check = function () {
    return this.num;
  };
  this.increment = function () {
    this.num++;
  };
}
