function highestRank(arr){
    let numCounter = {},
        maxCounter = 0,
        maxNum = null;
    arr.forEach(num => {
        if (!numCounter.hasOwnProperty(num))
            numCounter[num] = 1;
        else numCounter[num]++;
    });
    for (let i in numCounter)
        if (numCounter[i] >= maxCounter){
            maxCounter = numCounter[i];
            maxNum = i;
        }
    return Number(maxNum);
}