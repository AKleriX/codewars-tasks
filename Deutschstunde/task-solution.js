function derDieDas(wort) {
  let vowelsCounter = (wort.match(/[aeiouäöü]/gi) || []).length;
  return (vowelsCounter < 2 ? 'das' : vowelsCounter > 3 ? 'der' : 'die') + ' ' + wort;
}
