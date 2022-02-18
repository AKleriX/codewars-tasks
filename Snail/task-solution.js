snail = function(array) {
  let snailArr = [],
      counter = 0,
      start = 0,
      end = array.length;
  while (snailArr.length < array[0].length ** 2){
    if (start < end){
      for (let i = start; i < end; i++)
        if (!(counter % 2)) snailArr.push(array[start][i]);
        else snailArr.push(array[i][end - 1]);
      if (!(counter % 2)) start++;
      else [start, end] = [end - 2, start - 2];
    } else{
      for (let i = start; i > end; i--)
        if (!(counter % 2)) snailArr.push(array[start + 1][i]);
        else snailArr.push(array[i][end]);      
      if (!(counter % 2)) end++;
      else [start, end] = [end + 1, start + 1];
    }
    counter++;
  }
  return snailArr;
}