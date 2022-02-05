export function brainLuck(code: string, input: string) {
  let data: number[] = [],
      pointer: number = 0,
      output: number[] = [],
      inputIndex: number = 0,
      br: number = 0;
  for (let i = 0; i < code.length; i++){
    switch(code[i]){
        case '>':
          pointer++;
          if (pointer >= data.length) data.push(0);
          break;
        case '<':
          pointer--;
          break;
        case '+':
          data[pointer] = !data[pointer] ? 1 : (data[pointer] === 255 ? 0 : data[pointer] + 1);
          break;
        case '-':
          data[pointer] = !data[pointer] ? 255 : data[pointer] - 1;
          break;
        case '.':
          output.push(data[pointer]);
          break;
        case ',':
          data[pointer] = input[inputIndex].charCodeAt(0);
          inputIndex++;
          break;
        case '[':
          if (!data[pointer]){
            for (let j = i + 1; j < code.length; j++)
              if (code[j] === '[') br++;
              else if (code[j] === ']')
                if (br) br--;
                else {
                  i = j;
                  break;
                }
          }
          break;
        case ']':
          if (data[pointer]){
            for (let j = i - 1; j >= 0; j--)
              if (code[j] === ']') br++;
              else if (code[j] === '[') 
                if (br) br--;
                else{
                  i = j;
                  break;
                }
          } 
          break;        
    }
  }
  return output.map(byte => String.fromCharCode(byte)).join('');
}