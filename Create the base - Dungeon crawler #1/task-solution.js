class Game {
  constructor(name, level = 0) {
    this.player = new Player(name);
    this.level = Number.isInteger(+level) && +level >= 0 ? +level : 0;
    this.floors = [];
  }
}

class Player {
  constructor(name) {
    this.name = typeof name === 'string' && name.length ? name : 'Player';
    this.health = 100;
    this.position = { x: 0, y: 0 };
    this.damage = 10;
    this.luck = 1;
  }
}

class Monster {
  constructor(level) {
    this.level = Number.isInteger(+level) && level >= 0 ? +level : 0;
  }
}

class Map {
  constructor(level) {
    this.level = Number.isInteger(+level) && level >= 0 ? +level : 0;
  }
}
