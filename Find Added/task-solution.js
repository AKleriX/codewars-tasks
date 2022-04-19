function findAdded(st1, st2) {
  let numStr1 = [...st1].map(Number).sort((a, b) => a - b),
    numStr2 = [...st2].map(Number).sort((a, b) => a - b),
    added = '',
    pointer1 = 0,
    pointer2 = 0;
  while (pointer1 < st1.length && pointer2 < st2.length) {
    if (numStr1[pointer1] === numStr2[pointer2]) {
      pointer1++;
      pointer2++;
    } else if (numStr1[pointer1] < numStr2[pointer2]) pointer1++;
    else {
      added += numStr2[pointer2];
      pointer2++;
    }
  }
  if (pointer2 < st2.length) added += numStr2.slice(pointer2).join('');
  return added;
}
