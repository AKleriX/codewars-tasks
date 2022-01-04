function getNumberOfSquares(n) {
    let sumCounter = 0,
        numCounter = 0;
    for (numCounter = 1; numCounter <= Math.sqrt(n); numCounter++){
      sumCounter += numCounter**2;
      if (sumCounter >= n) 
        break;
    }
    return numCounter - 1;    
  }