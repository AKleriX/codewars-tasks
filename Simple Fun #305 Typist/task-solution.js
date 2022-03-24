function typist(s) {
  let caps = false,
    counter = 0;
  for (let i = 0; i < s.length; i++) {
    counter++;
    if ((s[i].toUpperCase() === s[i] && !caps) || (s[i].toLowerCase() === s[i] && caps)) {
      counter++;
      caps = !caps;
    }
  }
  return counter;
}
