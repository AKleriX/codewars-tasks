const spinAround = (turns) => {
  let angle = 0;
  for (let i = 0; i < turns.length; i++) angle += turns[i] === 'right' ? 90 : -90;
  return Math.abs((angle / 360) | 0);
};
