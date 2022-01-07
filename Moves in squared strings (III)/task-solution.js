function rot90Clock(strng) {  
    return diag1Sym(strng).map(row => row.split('').reverse().join(''));
  }
  
  function diag1Sym(strng) {
    return strng.map((row, i) => row.split('').map((_, j) => strng[j][i]).join(''));
  }
  
  function selfieAndDiag1(strng) {
    let diag1SymRows = diag1Sym(strng);
    return strng.map((row, i) => `${row}|${diag1SymRows[i]}`);
    
  }
  
  function oper(fct, s) {
    return fct(s.split('\n')).join('\n');
  }