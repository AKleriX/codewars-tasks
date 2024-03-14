const stone = Object.create({
  feature: 'earth',
  style: {
    color: 'black',
  },
});
Object.freeze(stone);
Object.freeze(stone.style);
