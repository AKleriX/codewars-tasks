function josephus(items,k){
    let circle = [...items],
        resArr = [],
        currentIndex = k;
    while (circle.length){
      while (currentIndex > circle.length) 
        currentIndex -= circle.length;    
      resArr.push(circle[currentIndex - 1]);
      circle.splice(currentIndex - 1, 1);
      currentIndex += k - 1;
    }
    return resArr;
  }