function strCount(str, letter) {
  return str.length - str.replace(new RegExp(letter, 'g'), '').length;
}
