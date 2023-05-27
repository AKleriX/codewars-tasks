Array.prototype.reverse = function () {
  let res = [];
  while (this.length) res.push(this.pop());
  for (let i = 0; i < res.length; i++) this.push(res[i]);
  return this;
};
