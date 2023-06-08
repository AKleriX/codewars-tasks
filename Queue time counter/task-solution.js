const queue = (queuers, pos) =>
  queuers.reduce((s, t, i, arr) => s + (t >= arr[pos] ? arr[pos] - (i > pos) : t), 0);
