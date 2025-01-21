const toBits = (set) => {
  let bitmap = new Array(5000).fill(0);
  set.split('\n').forEach((num) => (bitmap[+num] = 1));
  return bitmap;
};
