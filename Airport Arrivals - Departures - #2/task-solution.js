const flapRotors = function (linesBefore, linesAfter) {
  let rotors = [],
    abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789';
  for (let i = 0; i < linesBefore.length; i++) {
    let counter = 0,
      row = [];
    for (let j = 0; j < linesBefore[i].length; j++) {
      let idx = (abc.indexOf(linesBefore[i][j]) + counter) % abc.length,
        newIdx = abc.indexOf(linesAfter[i][j]),
        move = 0;
      if (idx <= newIdx) move = newIdx - idx;
      else move = newIdx + (abc.length - idx);
      counter += move;
      row.push(move);
    }
    rotors.push(row);
  }
  return rotors;
};
