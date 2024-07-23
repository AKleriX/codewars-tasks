const find = (object, path) =>
  path
    .split('.')
    .reduce((o, p) => (o && Object.prototype.hasOwnProperty.call(o, p) ? o[p] : undefined), object);
