function fibonacci(max) {
  let sum = 0,
      f1 = 0,  f2 = 1;
  while (f2 < max){
    sum += !(f2 % 2) ? f2 : 0;     
    [f1, f2] = [f2, f1 + f2];
  }  
  return sum;
}