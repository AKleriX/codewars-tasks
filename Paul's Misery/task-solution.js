function paul(x){
  let score = x.reduce((sum, val) => {
    switch (val){
        case 'kata':
          sum += 5;
          break;
        case 'Petes kata':
          sum += 10;
          break;
        case 'eating':
          sum += 1;
          break;
    }
    return sum;
  }, 0);
  if (score < 40) return 'Super happy!';
  else if (score >= 40 && score < 70) return 'Happy!';
  return score >= 100 ? 'Miserable!' : 'Sad!';
}