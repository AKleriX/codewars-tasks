function infiniteLoop(arr, d, n) {
  for (let i = 0; i < n; i++)
    switch (d) {
      case 'left':
        arr[0].push(arr[1].shift());
        arr[1].push(arr[2].shift());
        arr[2].push(arr[0].shift());
        break;
      case 'right':
        arr[0].unshift(arr[2].pop());
        arr[1].unshift(arr[0].pop());
        arr[2].unshift(arr[1].pop());
        break;
    }
  return arr;
}
