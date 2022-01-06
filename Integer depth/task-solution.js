function computeDepth (x){
    let setOfDigits = new Set(),
        depth = 0;
    while (setOfDigits.size < 10)  
      (x * ++depth).toString().split('').forEach(d => setOfDigits.add(d));     
    return depth;
  }