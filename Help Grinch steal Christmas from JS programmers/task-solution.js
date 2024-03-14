Date.prototype.getDate = function getGrinchDate() {
  if (this.toString().slice(4, 10) === 'Dec 25') return 26;
  return +this.toString().slice(8, 10);
};
