function roundRobin(jobs, slice, index) {
  let currentJobs = [...jobs],
    idx = 0,
    cc = 0;
  while (currentJobs[index] > 0) {
    let tmpCc = currentJobs[idx % jobs.length] >= slice ? slice : currentJobs[idx % jobs.length];
    currentJobs[idx % jobs.length] -= tmpCc;
    cc += tmpCc;
    idx++;
  }
  return cc;
}
