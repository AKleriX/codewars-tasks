Hero.prototype.move = function (dir) {
  let [x, y] = [...this.position].map(Number);
  switch (dir) {
    case 'up':
      if (x === 0) throw new Error('Invalid directon!');
      x--;
      break;
    case 'down':
      if (x === 4) throw new Error('Invalid directon!');
      x++;
      break;
    case 'left':
      if (y === 0) throw new Error('Invalid directon!');
      y--;
      break;
    case 'right':
      if (y === 4) throw new Error('Invalid directon!');
      y++;
      break;
  }
  this.position = x.toString() + y.toString();
  return this.position;
};
