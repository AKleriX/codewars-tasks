find_the_ball = function(start,swaps){
  return swaps.reduce((ballPos, swap) => swap.includes(ballPos) ? swap.find(pos => pos !== ballPos) : ballPos, start);
}