function find(needle, haystack) {
  let reg = new RegExp(needle.replace(/[\^&*+\-()\[\]$%\?]/g, (m) => '\\' + m).replace(/_/g, '.')),
    bestWord = (haystack.match(reg) || [])[0];
  return haystack.indexOf(bestWord);
}
