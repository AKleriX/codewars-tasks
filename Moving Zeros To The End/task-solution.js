var moveZeros = function (arr) {

    return arr.filter(item => item !== 0 ? true : false)
        .concat(arr.filter(item => item === 0 ? true : false));

}