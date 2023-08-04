class Cube {
  constructor(a) {
    this.a = a;
  }

  get length() {
    return this.a;
  }
  set length(a) {
    this.a = a;
  }

  get surfaceArea() {
    return 6 * this.a ** 2;
  }
  set surfaceArea(s) {
    this.a = Math.sqrt(s / 6);
  }

  get volume() {
    return this.a ** 3;
  }
  set volume(v) {
    this.a = v ** (1 / 3);
  }
}
