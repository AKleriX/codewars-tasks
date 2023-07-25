const turn = (current, target) => {
  const pos = ['N', 'E', 'S', 'W'];
  return current === 'N' && target === 'W'
    ? 'left'
    : current === 'W' && target === 'N'
    ? 'right'
    : pos.indexOf(current) < pos.indexOf(target)
    ? 'right'
    : 'left';
};
