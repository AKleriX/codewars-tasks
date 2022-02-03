function score( dice ) {
  let resCounter = dice.reduce((res, val) => !res.hasOwnProperty(val) ? (res[val] = 1, res) : (++res[val], res), {}),
      score = 0;
  for (let key in resCounter)
    switch (key){
        case '1': 
          score += resCounter['1'] >= 3 ? 1000 + 100 * (resCounter[key] - 3) : 100 * resCounter[key];
          break;
        case '5': 
          score += resCounter['5'] >= 3 ? 500 + 50 * (resCounter[key] - 3) : 50 * resCounter[key];
          break;
        case '2': 
          score += resCounter['2'] >= 3 ? 200 : 0;
          break;
        case '3': 
          score += resCounter['3'] >= 3 ? 300 : 0;
          break;
        case '4': 
          score += resCounter['4'] >= 3 ? 400 : 0;
          break;
        case '6': 
          score += resCounter['6'] >= 3 ? 600 : 0;
          break;
    }
  return score;
}