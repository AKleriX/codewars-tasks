function radLadies(name) {
  return name.replace(/[\d%$&/£?@]/g, '').toUpperCase();
}
