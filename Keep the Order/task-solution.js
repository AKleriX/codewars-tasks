function keepOrder(ary, val) {
  let bestIdx = -1;
  for (let i = 0; i < ary.length; i++)
    if (ary[i] >= val) {
      bestIdx = i;
      break;
    }
  return bestIdx === -1 ? ary.length : bestIdx;
}
