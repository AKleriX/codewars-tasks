function draw(waves) {
  let h = Math.max.apply(null, waves),
    w = waves.length,
    histogram = Array.from({ length: h }, () => new Array(w));
  for (let i = 0; i < waves.length; i++) {
    for (let j = 0; j < h; j++)
      if (j + 1 <= waves[i]) histogram[j][i] = '■';
      else histogram[j][i] = '□';
  }
  return histogram
    .reverse()
    .map((r) => r.join(''))
    .join('\n');
}
