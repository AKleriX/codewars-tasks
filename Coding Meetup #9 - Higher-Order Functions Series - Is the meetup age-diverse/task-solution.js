function isAgeDiverse(list) {
    return Object.keys(list.reduce((agesCounter, data) => {
      let decAge = Math.trunc(data.age / 10);
      if (decAge >= 10) agesCounter[10] = true;
      else if (decAge > 0) agesCounter[decAge] = true;
      return agesCounter;
    }, {})).length === 10;
  }