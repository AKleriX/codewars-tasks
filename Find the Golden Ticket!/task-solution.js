const finder = (box) => {
  for (let i = 0; i < box.length; i++) if (box[i][0]) return i;
  return 'There is no golden ticket!';
};
