function squareDigitsSequence(a0) {
  let numsCounter = new Set(),
      lastEl = a0;
  while (!numsCounter.has(lastEl)){
    numsCounter.add(lastEl);
    lastEl = lastEl.toString().split('').reduce((sumSqr, d) => Number(d)**2 + sumSqr, 0);
  }    
  return numsCounter.size + 1;  
}