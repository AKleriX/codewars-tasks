function splitWorkload(workload) {
  let sum = [0, workload.reduce((s, n) => s + n, 0)],
    min = [0, Math.abs(sum[0] - sum[1])];
  for (let i = 0; i < workload.length; i++) {
    sum[0] += workload[i];
    sum[1] -= workload[i];
    if (Math.abs(sum[0] - sum[1]) < min[1]) {
      min[0] = i + 1;
      min[1] = Math.abs(sum[0] - sum[1]);
    }
  }
  return workload.length ? min : [null, null];
}
