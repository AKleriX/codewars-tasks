function interpreter(tape, array) {
  let bits = [...array],
      codePointer = 0,
      iterator = 0;
  while (iterator < bits.length){
    switch(tape[codePointer]){
        case '0':
          iterator++;
          break;
        case '1':
          bits[iterator] = bits[iterator] === '0' ? '1' : '0';
          break;
    }
    codePointer = codePointer + 1 === tape.length ? 0 : codePointer + 1;
  } 
  return bits.join('');
}