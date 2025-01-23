const stepDown = (stair, width) => {
  if (width === 0) return [];
  if (stair < 0) return [];
  if (stair < width) return [stair];
  const result = stepDown(stair - width, width);
  result.push(stair);
  return result;
};
