const dontGiveMeFive = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++)
      if (i.toString().indexOf('5') === -1)
        arr.push(i);
    return arr.length;
  };