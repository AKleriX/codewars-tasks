const isMoreZeros = (symbol) => {
    let zerosAndOnesCounter = symbol.charCodeAt().toString(2).split('').reduce((counter, d) => {
      counter[d]++;
      return counter;
    }, [0, 0]);
    return zerosAndOnesCounter[0] > zerosAndOnesCounter[1];
  }
  
function moreZeros(s){
  return s.split('').reduce((arrMoreZero, letter) => {
    if (!arrMoreZero.includes(letter) && isMoreZeros(letter))
      arrMoreZero.push(letter);
    return arrMoreZero;
  }, []);
}