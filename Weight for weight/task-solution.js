function orderWeight(strng) {
    let weights = strng.trim().split(/\s+/);
    return weights.sort((a, b) => {
      let aDigitSum = [...a].reduce(getSumOfDigitReduce, 0),
          bDigitSum = [...b].reduce(getSumOfDigitReduce, 0);
      if (aDigitSum !== bDigitSum) return aDigitSum - bDigitSum;
      else return a.localeCompare(b);
    }).join(' ');
  }
  
  const getSumOfDigitReduce = (sum, num) => +num + sum;