function pascal(depth) {
    let pascalTri = [[1]];
    for (let i = 2; i <= depth; i++){
      let row = [1];
      for (let j = 1; j < i - 1; j++)
        row.push(pascalTri[i - 2][j - 1] + pascalTri[i - 2][j]); 
      row.push(1);
      pascalTri.push(row);
    }
    return pascalTri;  
  }