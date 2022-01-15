function posAverage(s) {
    let rows = s.split(', '),
        comPos = 0,
        com = 0;
    for (let i = 0; i < rows.length - 1; i++)
      for (let j = i + 1; j < rows.length; j++){
        for (let k = 0; k < rows[0].length; k++)     
          if (rows[i][k] === rows[j][k]) comPos++;        
        com++;
        }
    return Math.trunc((comPos * 100 / (com * rows[0].length)) * 10**10 ) / 10**10;
  }