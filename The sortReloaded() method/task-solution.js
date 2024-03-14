Array.prototype.sortReloaded = function (dir = 'asc') {
  return ['asc', 'desc'].includes(dir) && [...this].sort((a, b) => (dir === 'asc' ? a - b : b - a));
};
