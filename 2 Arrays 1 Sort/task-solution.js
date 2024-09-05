const linkedSort = (aToSort, aLinked, compare) => {
  let combined = aToSort.map((value, index) => ({ value: value, linked: aLinked[index] }));

  combined.sort((a, b) => {
    if (compare) return compare(a.value, b.value);
    return String(a.value).localeCompare(String(b.value));
  });

  for (let i = 0; i < combined.length; i++) {
    aToSort[i] = combined[i].value;
    aLinked[i] = combined[i].linked;
  }

  return aToSort;
};
