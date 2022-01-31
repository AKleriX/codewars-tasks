function solve(s){
    let lowerCaseCounter = 0,
        upperCaseCounter = 0;
    for (let i = 0; i < s.length; i++)
      if (s[i].toUpperCase() === s[i]) upperCaseCounter++;
      else lowerCaseCounter++;
    return upperCaseCounter > lowerCaseCounter ? s.toUpperCase() : s.toLowerCase();
  }