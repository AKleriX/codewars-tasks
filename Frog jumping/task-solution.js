function solution(a) {
  let pos = new Set(),
      currentPos = 0,
      counter = 0;
  while (!pos.has(currentPos)){    
    pos.add(currentPos);
    if (currentPos < 0 || currentPos >= a.length)
      return counter;
    counter++;
    currentPos += a[currentPos];
  }
  return -1;
}