const reverse = (arr) => {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }