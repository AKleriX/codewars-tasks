function waveSort(arr) {  
    for(let i = 0; i < arr.length - 1; i++)
      if (!(i % 2) && arr[i] < arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      else if((i % 2) && arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    return;
  }