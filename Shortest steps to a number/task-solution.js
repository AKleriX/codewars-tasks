function shortestStepsToNum(num) {
    let numStep = num,
        stepsCounter = 0;
    while (numStep > 1){
      if (!(numStep % 2) && (numStep / 2 >= 1))
        numStep /= 2;
      else numStep--;
      stepsCounter++;    
    }
    return stepsCounter;
  }