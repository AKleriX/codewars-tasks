const flapDisplay = function(lines, rotors) {
  let linesArr = [];
  for (let k = 0; k < lines.length; k++){
    let line = [...lines[k]],
        newLine = '';
    for (let i = 0; i < line.length; i++){
      for (let j = i; j < line.length; j++){
        let currentIndex = (ALPHABET.indexOf(line[j]) + rotors[k][i]) % ALPHABET.length;
        line[j] = ALPHABET[currentIndex];
      }
      newLine += line[i];
    }
    linesArr.push(newLine);
  }
  return linesArr;
}