// first solution 

function isCircleSorted( arr ){
  let sortArrStr = [...arr].sort((a, b) => a - b).join(',');
  for (let i = 0; i < arr.length; i++){
    let slicArrStr = arr.slice(-i).concat(arr.slice(0, -i)).join(',');
    if (slicArrStr === sortArrStr) return true;
  }
  return arr.length === 0;
}

// better solution

function isCircleSorted( arr ){
  let sortCount = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > arr[(i + 1) % arr.length]) sortCount++;  
  return sortCount <= 1;
}