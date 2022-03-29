function longer(s) {
  return s
    .split(' ')
    .sort((a, b) => a.length - b.length || a > b)
    .join(' ');
}
