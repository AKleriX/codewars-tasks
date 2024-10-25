class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  static getOrigin() {
    return new Point(0, 0, 0);
  }

  getDistanceFromOrigin() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  getDistanceFromPoint(point) {
    return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2 + (this.z - point.z) ** 2);
  }
}
