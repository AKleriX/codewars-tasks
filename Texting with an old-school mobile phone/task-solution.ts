export function sendMessage(message: string): string {
  const keys: { [key: string]: string } = {
    '1': '.,?!',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
    '*': "'-+=",
    '0': ' ',
  };
  let code = '',
    upCase = false;
  for (let i = 0; i < message.length; i++) {
    if (/\d|\*|#/.test(message[i]))
      code += `${code[code.length - 1] === message[i] ? ' ' : ''}${message[i]}-`;
    else {
      if (
        !/[!? \-.,'+=]/.test(message[i]) &&
        ((message[i].toUpperCase() === message[i] && !upCase) ||
          (message[i].toLowerCase() === message[i] && upCase))
      ) {
        upCase = !upCase;
        code += '#';
      }
      for (let j in keys) {
        if (keys[j].includes(message[i].toLowerCase())) {
          let count = keys[j].indexOf(message[i].toLowerCase()) + 1;
          if (code[code.length - 1] === j) code += ' ';
          code += j.repeat(count);
        }
      }
    }
  }
  return code;
}
