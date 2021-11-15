function pyramid(n) {
    let resultArr = [];
    for (let i = 0; i < n; i++)
        resultArr.push([...new Array(i + 1)].fill(1));
    return resultArr;
}