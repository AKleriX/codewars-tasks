function rotate(str){
    let rotStr = [];
    for (let i = 1; i <= str.length; i++)
      rotStr.push(str.slice(i) + str.slice(0, i));
    return rotStr;
  }