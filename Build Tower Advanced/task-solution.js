function towerBuilder(nFloors, nBlockSz) {
    let floors = [];
    for (let i = 1; i <= nFloors; i++){
      let starsCount = nBlockSz[0] * (2 * i - 1),
          spaceCount = (2 * nFloors - 1) * nBlockSz[0] - starsCount;
      for (let j = 1; j <= nBlockSz[1]; j++)
        floors.push(' '.repeat(spaceCount / 2) + '*'.repeat(starsCount) + ' '.repeat(spaceCount / 2));
    }
    return floors;
  }