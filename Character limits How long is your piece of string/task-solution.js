function charCheck(text, max, spaces) {
  let currentText = spaces ? text : text.replace(/ /g, '');
  return [max >= currentText.length, currentText.slice(0, max)];
}
