class Class {
  static getNumber() {
    this.n = this.n ? 2 * this.n : 1;
    return this.n;
  }
}
