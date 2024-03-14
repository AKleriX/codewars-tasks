const secondLargest = (array) => {
  if (!Array.isArray(array)) return undefined;
  const sortArr = Array.from(
    new Set(
      array
        .map((v) => (![null, undefined, false, true].includes(v) ? +v : NaN))
        .filter((n) => !isNaN(n)),
    ),
  ).sort((a, b) => b - a);
  return sortArr.length < 2 ? undefined : sortArr[1];
};
