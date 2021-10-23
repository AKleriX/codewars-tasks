function findUniq(arr) {
    let uniqNums = new Set(arr),
        eqNum,
        exNum;
    if (arr[0] === arr[1] ||
        arr[0] === arr[2]) eqNum = arr[0];
    else eqNum = arr[1];
    for (let num of uniqNums)
        if (num !== eqNum)
            exNum = num;
    return exNum;
}