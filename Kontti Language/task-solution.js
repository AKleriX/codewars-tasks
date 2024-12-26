String.prototype.kontti = function () {
  const replacer = (_, p1, p2) => 'ko' + p2 + '-' + p1 + 'ntti';
  return this.split(/\s/g)
    .map((v) => v.replace(/(^[^aeiouy]*[aeiouy])(\w*)/, replacer))
    .join(' ');
};
