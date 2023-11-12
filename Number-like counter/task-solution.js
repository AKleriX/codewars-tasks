function Counter() {
  this.c = 0;
  this.valueOf = () => this.c;
}

Counter.prototype.incr = function () {
  this.c += 1;
};
