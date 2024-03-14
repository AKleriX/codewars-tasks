const imageFilter = (arr) =>
  arr.map((s) =>
    ['jpg', 'gif', 'png', 'tiff', 'svg', 'bmp'].includes(
      (s.split('.').slice(-1)[0] || '').toLowerCase(),
    ) && s[0] !== '.'
      ? [s, s.split('.')[0], s.split('.')[1]]
      : null,
  );
