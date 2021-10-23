function deleteNth(arr,n){
    let countNums = {};
    return arr.filter(num => {
        countNums[num] = (countNums[num] || 0) + 1;
        return countNums[num] <= n;
    });
}