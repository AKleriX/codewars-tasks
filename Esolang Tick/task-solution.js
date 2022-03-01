function interpreter(tape) {
  let resStr = '',
      data = [0], 
      pointer = 0;
  for (let i = 0; i < tape.length; i++){
    switch (tape[i]) {
      case '+':
        data[pointer]++;
        if (data[pointer] > 255) data[pointer] = 0;
        break;
      case '>':
        pointer++;
        if (!data[pointer]) data[pointer] = 0;
        break;
      case '<':
        pointer--;
        if (!data[pointer]) data[pointer] = 0;
        break;
      case '*':
        resStr += String.fromCharCode(data[pointer]);
        break;
    }
  }
  return resStr;  
}