const cakes = (recipe, available) => {
    let cakesCounter = Math.max.apply(null, Object.values(available));
    for (let product in recipe){    
      if (!available.hasOwnProperty(product)) return 0;    
      let productCounter = Math.trunc(available[product] / recipe[product]);
      if (cakesCounter > productCounter) 
        cakesCounter = productCounter;
    }
    return cakesCounter;
  }