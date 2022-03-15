function SJF(jobs, index) {
  let currentJobs = [...jobs],
    currentIndex = currentJobs.indexOf(Math.min.apply(null, currentJobs)),
    cc = 0;
  while (currentIndex !== index) {
    cc += currentJobs[currentIndex];
    currentJobs[currentIndex] = Infinity;
    currentIndex = currentJobs.indexOf(Math.min.apply(null, currentJobs));
  }
  return cc + currentJobs[currentIndex];
}
