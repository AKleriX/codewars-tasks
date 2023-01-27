const multiple = (x) =>
  !(x % 3) && !(x % 5) ? 'BangBoom' : !(x % 3) ? 'Bang' : !(x % 5) ? 'Boom' : 'Miss';
