const bishop = (startPos, endPos, num_Moves) => {
  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let startColor = /([aceg][2468])|([bdfh][1357])/.test(startPos) ? 'white' : 'black',
    endColor = /([aceg][2468])|([bdfh][1357])/.test(endPos) ? 'white' : 'black',
    dif = +startPos[1] - +endPos[1];
  if (startColor !== endColor || (!num_Moves && startPos !== endPos)) return false;
  if (startPos === endPos || num_Moves > 1) return true;
  return (
    abc[abc.indexOf(startPos[0]) + dif] === endPos[0] ||
    abc[abc.indexOf(startPos[0]) - dif] === endPos[0]
  );
};
