class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
    this.baryon_number = 1 / 3;
  }

  interact(q) {
    [this.color, q.color] = [q.color, this.color];
  }
}
