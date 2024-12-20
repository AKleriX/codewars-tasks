Array.prototype.remove = function (pred) {
  const extracted = [],
    retained = [];
  for (let i = 0; i < this.length; i++)
    if (pred(this[i])) extracted.push(this[i]);
    else retained.push(this[i]);
  this.length = 0;
  for (let i = 0; i < retained.length; i++) this.push(retained[i]);
  return extracted;
};
