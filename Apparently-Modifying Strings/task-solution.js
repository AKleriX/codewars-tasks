const apparently = (string) =>
  string
    .split(' ')
    .map((w, i, a) =>
      (w === 'and' || w === 'but') && a[i + 1] !== 'apparently' ? w + ' apparently' : w,
    )
    .join(' ');
