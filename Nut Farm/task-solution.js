const shakeTree = function (tree) {
  let nutsPosAtGround = Array.from({ length: tree[0].length }, () => 0);
  for (let i = 0; i < tree[0].length; i++) {
    if (tree[0][i] === 'o') {
      let nutPosY = 1,
        nutPosX = i;
      while (nutPosY < tree.length) {
        if (tree[nutPosY][nutPosX] === '/') nutPosX--;
        else if (tree[nutPosY][nutPosX] === '\\') nutPosX++;
        if (!(tree[nutPosY][nutPosX] === '_')) nutPosY++;
        else break;
      }
      if (nutPosY === tree.length) nutsPosAtGround[nutPosX]++;
    }
  }
  return nutsPosAtGround;
};
