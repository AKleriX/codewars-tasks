function send(text) {
  let bits = [...text]
      .map((s) => addZero(s.charCodeAt().toString(2)))
      .join('')
      .match(/(.)\1*/g),
    code = [];
  bits.forEach((bits) => {
    code.push('0'.repeat(bits[0] === '1' ? 1 : 2));
    code.push('0'.repeat(bits.length));
  });
  return code.join(' ');
}

function receive(text) {
  let code = text.split(' '),
    bits = '',
    str = '';
  for (let i = 0; i < code.length; i += 2)
    bits += (code[i].length === 1 ? '1' : '0').repeat(code[i + 1].length);
  for (let i = 0; i < bits.length; i += 7)
    str += String.fromCharCode(parseInt(bits.slice(i, i + 7), 2));
  return str;
}

const addZero = (num) => '0'.repeat(7 - num.length) + num;
