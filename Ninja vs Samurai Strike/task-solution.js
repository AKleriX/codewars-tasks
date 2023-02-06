const Warrior = function (name) {
  this.name = name;
  this.health = 100;

  this.strike = function (enemy, swings) {
    enemy.health = Math.max(0, enemy.health - swings * 10);
  };
};
