export function interpreter(code: string, tape: string): string {
  let data: number[] = [...tape].map(Number),
      p = 0;
  for (let i = 0; i < code.length; i++){   
    switch(code[i]){
        case '>':
          if (p < data.length - 1) p++;
          else return data.join('');
          break;
        case '<':
          if (p > 0) p--;
          else return data.join('');
          break;
        case '*':
          data[p] = data[p] ? 0 : 1;
          break;
        case '[':
          if (!data[p]){
            let br = 1,
                j = i + 1;
            while (br){
              if (code[j] === '[') br++;
              else if (code[j] === ']') br--;
              j++;
            }
            i = j - 1;
          }
          break;
        case ']':
          if (data[p]){
            let br = 1,
                j = i - 1;
            while (br){
              if (code[j] === ']') br++;
              else if (code[j] === '[') br--;
              j--;
            }
            i = j + 1;
          }
          break;
    }
  }
  return data.join('');
}