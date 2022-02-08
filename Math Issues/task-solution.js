Math.round = function(number) {
  return Math.floor(number + 0.5); 
};

Math.ceil = function(number) {
  return (number | 0) + (!(number % 1) ? 0 : 1)
};

Math.floor = function(number) {
  return (number | 0);
};