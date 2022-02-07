export function parseMolecule(formula: string) {
  //since different brackets can be used - we will make a dictionary of matching the opening - closing bracket
  const br = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let currentSymbol: string | null = null,
      acc: number = 1,
      atomsCounter = {};
  for (let i = 0; i < formula.length; i++){
    //if the considered formula symbol is a capital letter, then this is the beginning of a new atom
    if (/[A-Z]/.test(formula[i])){
      //if we are already considering some atom, i.e. we are waiting for its coefficient or a small letter,
      //then we assume that its coefficient is equal to 1 and add it to the resulting dictionary
      if (currentSymbol) 
        atomsCounter[currentSymbol] = atomsCounter[currentSymbol] ? atomsCounter[currentSymbol] + acc : acc;
      currentSymbol = formula[i];
    } 
    // if the symbol in question is a small letter, then this is a continuation of the name of the already considered atom
    else if (/[a-z]/.test(formula[i])){
      currentSymbol += formula[i];
    }
    //if the character in question is a digit, then this is the coefficient of the last atom in question
    else if (/\d/.test(formula[i])){
      let num = formula[i],
          j = i + 1;
      //looking for all digits of the coefficient
      while (/\d/.test(formula[j])){
        num += formula[j];
        j++;
      }
      i = j - 1;
      //add the number of atoms to the dictionary
      atomsCounter[currentSymbol] = atomsCounter[currentSymbol] ? atomsCounter[currentSymbol] + (acc * Number(num)): (acc * Number(num));
      currentSymbol = null;
    }
    //if the character in question is an open brace
    else if (/\(|\[|\{/.test(formula[i])){
      let currentBr = formula[i],
          counterBr = 1,
          j = i + 1;
      //look for the closing brace for this brace
      while (counterBr){
        if (currentBr === formula[j]) counterBr++;
        else if (br[currentBr] === formula[j]) counterBr--;
        j++;
      }
      //collecting bracket coefficient numbers
      let num = /\d/.test(formula[j]) ? formula[j++] : 1;
      while (/\d/.test(formula[j])){
        num += formula[j];
        j++;
      }  
      if (currentSymbol) 
        atomsCounter[currentSymbol] = atomsCounter[currentSymbol] ? atomsCounter[currentSymbol] + acc : acc;
      //change the overall coefficient
      acc *= Number(num);
      currentSymbol = null;
    }
    //if the character in question is a closing brace
    else if (/\)|\]|\}/.test(formula[i])){      
      let j = i + 1,
          num = /\d/.test(formula[j]) ? formula[j++] : 1;
      //collect its coefficient
      while (/\d/.test(formula[j])){
        num += formula[j];
        j++;
      }  
      if (currentSymbol) 
        atomsCounter[currentSymbol] = atomsCounter[currentSymbol] ? atomsCounter[currentSymbol] + acc : acc;
      //change the overall coefficient
      acc /= Number(num);
      currentSymbol = null;
      i = j - 1;
    }    
  }
  
  // if, after considering the entire formula, we still have one more unallocated atom, we add it to the dictionary
  if (currentSymbol) atomsCounter[currentSymbol] = atomsCounter[currentSymbol] ? atomsCounter[currentSymbol] + acc : acc;
  
  return atomsCounter;
}