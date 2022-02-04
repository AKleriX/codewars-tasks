function doneOrNot(board){  
    for (let i = 0; i < 9; i++){
      let row = new Set([...board[i]]),
          col = [];
      for (let j = 0; j < 9; j++)
        col.push(board[j][i]);
      col = new Set([...col]);
      let startYIndex = i * 3 % 9,
          startXIndex = i > 2 ? (i > 5 ? 6 : 3) : 0,
          reg = [];
      for (let j = startXIndex; j < startXIndex + 3; j++)
        for (let k = startYIndex; k < startYIndex + 3; k++)     
          reg.push(board[j][k]);     
      reg = new Set([...reg]);
      if (col.size < 9 || row.size < 9 || reg.size < 9)
        return 'Try again!';
    }
    return 'Finished!';
  }