function findUniq(arr) {
    let lowerArr = arr.map(w => w.toLowerCase()),
        unWord = arr[0];
    
    for (let i = 1; i < arr.length; i++){
      let l1 = Array.from(new Set(lowerArr[i - 1])).sort().join(''),
          l2 = Array.from(new Set(lowerArr[i])).sort().join('');
      if (l1 !== l2){
        if (i === arr.length - 1) unWord = arr[i];
        else {
          let l3 = Array.from(new Set(lowerArr[i + 1])).sort().join('');
          if (l1 !== l3) unWord = arr[i - 1];
          else unWord = arr[i];
          break;
        }
      }
    }
    
    return unWord;
  }