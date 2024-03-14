const hotSingles = (arr1, arr2) =>
  [...Array.from(new Set(arr1)), ...Array.from(new Set(arr2))].filter(
    (e) => !(arr1.includes(e) && arr2.includes(e)),
  );
