class Bee {
  constructor(capacity, hive) {
    this.capacity = capacity;
    this.hive = hive;
  }

  unloadPollen() {
    this.hive.addPollen(this.capacity);
  }
}

class Hive {
  constructor() {
    this.pollen = 100;
  }

  addPollen(pollen) {
    this.pollen += pollen;
  }

  getPollen() {
    return this.pollen;
  }
}
