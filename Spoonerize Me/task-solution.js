const spoonerize = (words) =>
  words
    .split(' ')
    .map((w, i, arr) =>
      arr.length === 2
        ? !i
          ? arr[1][0] + w.slice(1)
          : arr[0][0] + w.slice(1)
        : !i
        ? arr[2][0] + w.slice(1)
        : i === 1
        ? w
        : arr[0][0] + w.slice(1),
    )
    .join(' ');
