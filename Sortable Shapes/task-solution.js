class Shape {
  constructor(area) {
    this.value = area;
  }
  valueOf() {
    return this.value;
  }
}

class Square extends Shape {
  constructor(side) {
    super(side ** 2);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(radius ** 2 * Math.PI);
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super((base * height) / 2);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width * height);
  }
}

class CustomShape extends Shape {
  constructor(area) {
    super(area);
  }
}
