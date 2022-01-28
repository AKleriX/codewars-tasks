function solution (data, replace) {
    if (typeof data === 'object') 
      for (let key in data){
        if (data[key] === 'dynamic') data[key] = replace;
        else if (typeof data[key] === 'object') data[key] = solution(data[key], replace);
      }
    return data;
  }