const areSimilar = (A, B) =>
  A.reduce((c, v, i) => c + (v !== B[i]), 0) <= 2 && A.sort().join() === B.sort().join();
