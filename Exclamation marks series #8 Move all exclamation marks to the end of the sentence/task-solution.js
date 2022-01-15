function remove(s){
    let sNoMarks =  s.replace(/!/g, '');
    return sNoMarks + '!'.repeat(s.length - sNoMarks.length);  
  }