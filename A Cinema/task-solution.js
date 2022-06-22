function cinema(boys, girls) {
  let maj = boys >= girls ? 'B' : 'G',
    min = boys >= girls ? 'G' : 'B',
    dif = Math.abs(boys - girls) - 1,
    seq = maj;

  if (Math.abs(boys - girls) > Math.min(boys, girls)) return null;

  while (dif > 0) {
    seq += min + maj + maj;
    dif--;
  }

  for (let i = seq.length; i !== boys + girls; i++) {
    if (seq[i - 1] === maj) seq += min;
    else seq += maj;
  }

  return seq;
}
