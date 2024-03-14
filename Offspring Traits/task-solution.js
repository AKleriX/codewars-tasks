const bearFur = (bears) => {
  const colors = new Set(bears);
  return colors.size === 1
    ? bears[0]
    : colors.has('black') && colors.has('brown')
    ? 'dark brown'
    : colors.has('black') && colors.has('white')
    ? 'grey'
    : colors.has('white') && colors.has('brown')
    ? 'light brown'
    : 'unknown';
};
