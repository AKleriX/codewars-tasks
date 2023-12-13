const reverseMiddle = (array) =>
  array
    .slice(
      Math.floor(array.length / 2) - 1,
      Math.floor(array.length / 2) + (array.length % 2 ? 2 : 1),
    )
    .reverse();
