function uniq(a){
    let uniqArr = [];
    for (let i = 0; i < a.length; i++)
      if (a[i] !== uniqArr[uniqArr.length - 1]) uniqArr.push(a[i]);
    return uniqArr;
  }