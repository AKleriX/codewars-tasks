function countSmileys(arr) {
    return arr.reduce((counter, item) => {
        return item.match(/(:|;)(-|~){0,1}(\)|D)/) ? counter + 1 : counter;
    }, 0);
}
