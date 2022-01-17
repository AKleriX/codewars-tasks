function solve(s){
    if (s.split('').reverse().join('') === s) return 'OK';
    for (let i = 0; i < s.length; i++)
      if ((s.slice(0, i) + s.slice(i + 1)).split('').reverse().join('') === (s.slice(0, i) + s.slice(i + 1)))
        return 'remove one';
    return 'not possible';
  }