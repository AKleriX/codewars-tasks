function johnAndAnn(n){
    let ann = [1],
        john = [0],
        sumAnn = 1,
        sumJonh = 0;
    for (let i = 1; i < n; i++){
      john.push(i - ann[john[i - 1]]);  
      sumJonh += john[john.length - 1];
      ann.push(i - john[ann[i - 1]]);  
      sumAnn += ann[ann.length - 1];
    }
    return [ann, sumAnn, john, sumJonh];
  }
  
  function john(n) {
      return johnAndAnn(n)[2];
  }
  function ann(n) {    
      return johnAndAnn(n)[0];
  }
  
  function sumJohn(n) {
      return johnAndAnn(n)[3];
  }
  
  function sumAnn(n) {
      return johnAndAnn(n)[1];
  }