function find(seq) {
    let max = seq[0],
        min = seq[0],
        sum = 0;
    for (let i = 0; i < seq.length; i++){
      if (seq[i] > max) max = seq[i];
      if (seq[i] < min) min = seq[i];
      sum += seq[i];
    }
    return (min + max) * (seq.length + 1) / 2 - sum;
  }