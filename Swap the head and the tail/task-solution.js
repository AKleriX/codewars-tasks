const swapHeadAndTail = (arr) =>
  arr
    .slice(Math.ceil(arr.length / 2))
    .concat(
      arr.length % 2 ? arr.slice(Math.floor(arr.length / 2), Math.ceil(arr.length / 2)) : [],
      arr.slice(0, Math.floor(arr.length / 2)),
    );
