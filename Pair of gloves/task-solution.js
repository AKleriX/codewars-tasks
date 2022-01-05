function numberOfPairs(gloves){
    let pairCounter = 0,
        glovesTypes = gloves.reduce((types, type) => {
      if (!types.hasOwnProperty(type)) types[type] = 0;
      if (++types[type] % 2 === 0)
        pairCounter++;    
      return types;
    }, {});
    return pairCounter;  
  }