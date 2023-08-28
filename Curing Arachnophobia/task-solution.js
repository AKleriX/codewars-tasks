const drawSpider = (legSize, bodySize, mouth, eye) =>
  (legSize === 1 ? '^' : legSize === 2 ? '/\\' : legSize === 3 ? '/╲' : '╱╲') +
  '('.repeat(bodySize) +
  eye.repeat(2 ** bodySize / 2) +
  mouth +
  eye.repeat(2 ** bodySize / 2) +
  ')'.repeat(bodySize) +
  (legSize === 1 ? '^' : legSize === 2 ? '/\\' : legSize === 3 ? '╱\\' : '╱╲');
