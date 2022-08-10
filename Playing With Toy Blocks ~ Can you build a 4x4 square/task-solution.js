function buildSquare(blocks) {
  let currentBlocks = [...blocks].sort((a, b) => b - a).join(''),
    counter = 0;
  while (/4/.test(currentBlocks) && counter < 4) {
    currentBlocks = currentBlocks.replace('4', '');
    counter++;
  }
  while (/22/.test(currentBlocks) && counter < 4) {
    currentBlocks = currentBlocks.replace('22', '');
    counter++;
  }
  let tmpBlocks = currentBlocks.replace('2', '');
  while (/31/.test(tmpBlocks) && counter < 4) {
    currentBlocks = currentBlocks.replace('3', '');
    currentBlocks = currentBlocks.replace('1', '');
    tmpBlocks = tmpBlocks.replace('31', '');
    counter++;
  }
  while (/211/.test(currentBlocks) && counter < 4) {
    currentBlocks = currentBlocks.replace('211', '');
    counter++;
  }
  while (/1111/.test(currentBlocks) && counter < 4) {
    currentBlocks = currentBlocks.replace('1111', '');
    counter++;
  }
  return counter > 3;
}
