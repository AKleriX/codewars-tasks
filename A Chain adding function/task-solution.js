function add(n){
    let sum = n;
    const addNum = (num) => {
      sum += num;
      return  addNum;
    };
    addNum.toString = () => sum;
    return addNum;
  }