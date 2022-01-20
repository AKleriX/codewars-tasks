function bears(x, s){
  let pairs = s.match(/(B8)|(8B)/g);
  pairs = pairs ? pairs.join('') : '';
  return [pairs, pairs.length >= x * 2];
}