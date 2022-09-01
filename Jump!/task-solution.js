function canJump(array, pos = 0) {
  if (array[pos] === 0 || pos === array.length - 1) return false;
  for (let i = pos + 1; i <= pos + array[pos]; i++)
    if (i >= array.length) return true;
    else if (canJump(array, i)) return true;
  return false;
}
