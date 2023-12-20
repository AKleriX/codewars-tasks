class LCG {
  constructor(x) {
    this.a = 2;
    this.c = 3;
    this.m = 10;
    this.x = x;
  }
  random() {
    this.x = (this.a * this.x + this.c) % this.m;
    return this.x / 10;
  }
}
