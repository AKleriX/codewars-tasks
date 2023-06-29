function mirrorImage(arr) {
  let pairs = arr.filter((n, i, a) => {
    let revNumStr = [...n.toString()].reverse().join('');
    return (
      revNumStr === (i < a.length - 1 ? a[i + 1].toString() : undefined) ||
      revNumStr === (i ? a[i - 1].toString() : undefined)
    );
  });
  return pairs.length >= 2 ? pairs.slice(0, 2) : [-1, -1];
}
