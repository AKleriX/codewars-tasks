export class Cuboid {
  length: number;
  width: number;
  height: number;
  constructor(length: number, width: number, height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea() {
    return 2 * (this.length * this.width + this.width * this.height + this.length * this.height);
  }

  get volume() {
    return this.length * this.width * this.height;
  }
}

export class Cube extends Cuboid {
  constructor(a: number) {
    super(a, a, a);
  }
}
