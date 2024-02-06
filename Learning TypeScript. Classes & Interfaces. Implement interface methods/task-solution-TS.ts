interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}

export class Square implements IGeometricFigure {
  a: number;
  area() {
    return this.a ** 2;
  }
  perimeter() {
    return this.a * 4;
  }
  constructor(a: number) {
    this.a = a;
  }
}

export class Circle implements IGeometricFigure {
  r: number;
  area() {
    return this.r ** 2 * Math.PI;
  }
  perimeter() {
    return this.r * 2 * Math.PI;
  }
  constructor(r: number) {
    this.r = r;
  }
}
