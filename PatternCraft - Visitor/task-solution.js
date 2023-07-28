class Marine {
  constructor() {
    this.health = 100;
  }
  accept(visitor) {
    visitor.visitArmored(this);
  }
}

class Marauder {
  constructor() {
    this.health = 125;
  }
  accept(visitor) {
    visitor.visitLight(this);
  }
}

class TankBullet {
  visitLight(unit) {
    unit.health -= 32;
  }
  visitArmored(unit) {
    unit.health -= 21;
  }
}
