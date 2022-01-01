function splitAndAdd(arr, n) {
    if (n === 0) return arr;
    let oneSliceArr = arr.slice(0, Math.floor(arr.length / 2)).reverse(),
        twoSliceArr = arr.slice(Math.floor(arr.length / 2)).reverse();
    return splitAndAdd(twoSliceArr.map((num, i) => oneSliceArr[i] ? num + oneSliceArr[i] : num).reverse(), n - 1);
}