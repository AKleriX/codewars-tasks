Array.prototype.all = function (p) {
  for (let i = 0; i < this.length; i++) if (!p(this[i])) return false;
  return true;
};

Array.prototype.none = function (p) {
  for (let i = 0; i < this.length; i++) if (p(this[i])) return false;
  return true;
};

Array.prototype.any = function (p) {
  for (let i = 0; i < this.length; i++) if (p(this[i])) return true;
  return false;
};
