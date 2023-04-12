function mineColor(file, rank) {
  const col = file.charCodeAt() - 96;
  return rank % 2 ? (col % 2 ? 'black' : 'white') : col % 2 ? 'white' : 'black';
}
