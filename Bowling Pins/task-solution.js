function bowlingPins(arr){
    let bowlingRows = [],
        numsCounter = 7;
    for (let i = 4; i >= 1; i--){
      const sideSpaces = ' '.repeat((7 - 2 * i + 1) / 2),
            pinsOnRow = [];
      for (let j  = numsCounter; j < numsCounter + i; j++)
        pinsOnRow.push(arr.includes(j) ? ' ' : 'I');
      numsCounter -= (i - 1);
      bowlingRows.push(sideSpaces + pinsOnRow.join(' ') + sideSpaces);
    }
    return bowlingRows.join('\n');
  }