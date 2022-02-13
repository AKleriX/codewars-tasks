const createSpiral = (n) => {
  if (parseInt(n) !== n) return [];
  let a = Array.from({length: n}, () => new Array(n).fill(0)),
       iterator = 1,
       start = 0,
       end = n,
       counter = 1;
  while (iterator <= n**2){
      if (start < end){
          for (let i = start; i < end; i++)
              if (counter % 2) a[start][i] = iterator++;
              else a[i][end - 1] = iterator++;
          if (counter % 2) start++;
          else [start, end] = [end - 2, start - 1];        
      } else {
          for (let i = start; i >= end; i--){
              if (counter % 2) a[start + 1][i] = iterator++;
              else a[i][end - 1] = iterator++;
          }
          if (counter % 2) end++;
          else [start, end] = [end, start + 1];
      }
      counter++;
  }
   return a;
}