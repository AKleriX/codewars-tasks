function findSquares(x,y){
  let squaresCounter = 0;
  while (x && y){
    squaresCounter += x * y;
    x--;
    y--;
  }
  return squaresCounter;
}