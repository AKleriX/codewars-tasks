function solve(s){
    let counter = {},
        symbols = 0;
    for (let i = 0; i < s.length; i++)
      counter[s[i]] = (counter[s[i]] || 0) + 1;
    symbols = Object.keys(counter).length;
    for (let l in counter){
      counter[l]--;
      if (counter[l] === 0) symbols--;
      let sameCounter = 0,
          sameLen = -1;
      for (let k in counter)
        if (counter[k] !== 0 && (sameLen === counter[k] || sameLen === -1)){
          sameLen = counter[k];
          sameCounter++;
        }
      if (sameCounter === symbols) return true;
      if (counter[l] === 0) symbols++;
      counter[l]++;
    }
    return false;
  }