const tvRemote = function (word) {
  const keys = [
    ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
    ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
    ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
    ['p', 'q', 'r', 's', 't', '.', '@', '0'],
    ['u', 'v', 'w', 'x', 'y', 'z', '_', '/'],
  ];
  let pos = [0, 0],
    counter = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < keys.length; j++)
      for (let k = 0; k < keys[j].length; k++)
        if (keys[j][k] === word[i]) {
          counter += Math.abs(pos[0] - j) + Math.abs(pos[1] - k) + 1;
          pos = [j, k];
        }
  }
  return counter;
};
