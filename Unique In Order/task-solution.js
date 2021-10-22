var uniqueInOrder = function(iterable){
    let iterableArr = Array.isArray(iterable) ? iterable : iterable.split('');

    return iterableArr.filter((item, index) => iterableArr[index - 1] !== item);
}