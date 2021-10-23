function sortArray(array) {
    let oddArr = array.filter(num => num % 2).sort((a, b) => a - b),
        oddIndex = 0;
    return array.map(num => num % 2 ? oddArr[oddIndex++] : num);
}