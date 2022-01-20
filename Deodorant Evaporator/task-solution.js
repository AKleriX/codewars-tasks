function evaporator(content, evap_per_day, threshold){ 
    let daysCounter = 0,
        minContent = content * (threshold / 100);
    while (content > minContent){
      content -= content * (evap_per_day / 100);
      daysCounter++;
    }
    return daysCounter;
  }