function Character(name, opness) {
  this.name = name;
  this.opness = opness;
  this.attack = () => this.opness + ~~(Math.random() * 20) + 1;
}
