function phone(strng, num) {
  let number = new RegExp(num),
      currentLine = strng.split('\n').filter(line => number.test(line));
  if (currentLine.length > 1) return `Error => Too many people: ${num}`;
  if (!currentLine.length) return `Error => Not found: ${num}`;
  let name = currentLine[0].match(/<.+>/)[0].slice(1, -1),
      address = currentLine[0].replace(number, '').replace(/<.+>/, '').replace(/[^a-z0-9_\-. ]/ig, '').replace(/_| +/g, ' ').trim();
  return `Phone => ${num}, Name => ${name}, Address => ${address}`;
}