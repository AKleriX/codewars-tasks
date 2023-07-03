function getFreeUrinals(urinals) {
  let realUri = urinals.replace(/0?10?/g, '1').replace(/00/g, '0');
  return /11/.test(urinals) ? -1 : realUri.replace(/1/g, '').length;
}
