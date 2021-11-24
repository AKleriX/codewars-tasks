// return the missing number!
function findNumber(array) {
    let sumAllNumbers = 0,
        currentSumAllNumbers = 0;
    for (let i = 0; i < array.length; i++){
        sumAllNumbers += array[i];
        currentSumAllNumbers += i + 1;
    }
    currentSumAllNumbers += array.length + 1;
    return currentSumAllNumbers - sumAllNumbers;
}