const sternBrocot = (n) => {
  let storage = [1, 1],
    firstIdx = 0;

  while (true) {
    if (storage[firstIdx] === n) return firstIdx;

    let sumPair = storage[firstIdx] + storage[firstIdx + 1];
    firstIdx++;
    let afterThat = storage[firstIdx];

    storage.push(sumPair, afterThat);
  }
};
