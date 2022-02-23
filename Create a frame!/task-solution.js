const frame = (text, char) => {
  let boardLength = Math.max.apply(null, text.map(w => w.length)) + 4,
      textInFrame = [char.repeat(boardLength)];
  text.forEach(w => textInFrame.push(char + ' ' + w + ' '.repeat(boardLength - w.length - 3) + char));
  return textInFrame.join('\n') + '\n' + char.repeat(boardLength);
};