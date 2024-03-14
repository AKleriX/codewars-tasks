const lastManStanding = (n) => {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  while (arr.length > 1) {
    arr = arr.filter((_, i) => i % 2);
    arr.reverse();
  }
  return arr[0];
};
