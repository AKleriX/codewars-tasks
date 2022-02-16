function maxSum(arr,range){
    let prefix = [0],
        max = -Infinity;
    for (let i = 0; i < arr.length; i++)
      prefix.push(prefix[prefix.length - 1] + arr[i]);
    for (let i = 0; i < range.length; i++)
      if (prefix[range[i][1] + 1] - prefix[range[i][0]] > max)
        max = prefix[range[i][1] + 1] - prefix[range[i][0]];    
    return max;  
  }