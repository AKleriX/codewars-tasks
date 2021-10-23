function comp(array1, array2){
    if (array1 && array2)
        if(array1.map(num => Math.sqrt(num)).sort((a, b) => a - b).join(' ') === array2.sort((a, b) => a - b).join(' ') ||
            array1.sort((a, b) => a - b).join(' ') === array2.map(num => Math.sqrt(num)).sort((a, b) => a - b).join(' '))
            return true;
    return false;
}