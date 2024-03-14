const shuffle = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newIdx = getIdx(0, arr.length - 1);
    while (newArr[newIdx] !== undefined) newIdx = getIdx(0, arr.length - 1);
    newArr[newIdx] = arr[i];
  }
  return newArr;
};

const getIdx = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
