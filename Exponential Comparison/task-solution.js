const compare = (number1, number2) =>
  number1[1] * Math.log(number1[0]) > number2[1] * Math.log(number2[0]) ? number1 : number2;
