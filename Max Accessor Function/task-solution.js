const max = (data, accessor) => {
  if (accessor) data = data.map(accessor);
  return Math.max(...data);
};
