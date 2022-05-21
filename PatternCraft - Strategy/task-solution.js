class Fly {
  move(unit) {
    return unit.position + 10;
  }
}

class Walk {
  move(unit) {
    return unit.position + 1;
  }
}

class Viking {
  constructor() {
    this.moveBehavior = new Walk();
    this.position = 0;
  }

  move() {
    this.position = this.moveBehavior.move(this);
  }
}
