function addArrays(array1, array2) {
    if (array1.length === 0 && array2.length === 0) return [];
    let numStr = (parseInt(array1.length > 0 ? array1.reduce((num, d) => num + d,'') : 0) +
            parseInt(array2.length > 0 ? array2.reduce((num, d) => num + d,'') : 0))
            .toString(),
        num;
    if (numStr[0] === '-'){
        num = numStr.slice(1).split('').map(Number);
        num[0] *= -1;
    } else num = numStr.split('').map(Number);
    return num;
}