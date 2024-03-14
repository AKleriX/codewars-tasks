const treePhotography = (trees) => {
  let leftC = 0,
    rightC = 0,
    maxLeft = 0,
    maxRight = 0;
  for (let i = 0; i < trees.length; i++) {
    if (trees[i] > maxLeft) {
      maxLeft = trees[i];
      leftC++;
    }
    if (trees[trees.length - 1 - i] > maxRight) {
      maxRight = trees[trees.length - 1 - i];
      rightC++;
    }
  }
  return leftC > rightC ? 'left' : 'right';
};
