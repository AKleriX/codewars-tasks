// returns index of move
function solveTTT(board) {
  let bordAndIndex = board.map((pos, i) => [pos, i]),
      rowsColsDiags = [bordAndIndex.slice(0, 3), bordAndIndex.slice(3, 6), bordAndIndex.slice(6),
                       [bordAndIndex[0], bordAndIndex[3], bordAndIndex[6]], 
                       [bordAndIndex[1], bordAndIndex[4], bordAndIndex[7]],
                       [bordAndIndex[2], bordAndIndex[5], bordAndIndex[8]],
                       [bordAndIndex[0], bordAndIndex[4], bordAndIndex[8]], 
                       [bordAndIndex[2], bordAndIndex[4], bordAndIndex[6]]];
  
  for (let i = 0; i < rowsColsDiags.length; i++){    
    let pos = rowsColsDiags[i].map(pos => pos[0]);
    if (pos.indexOf('X') !== pos.lastIndexOf('X') && pos.indexOf('') !== -1){
      return rowsColsDiags[i][pos.indexOf('')][1];
    }
  }
  return board.indexOf('');
}