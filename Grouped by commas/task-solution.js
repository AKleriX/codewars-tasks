function groupByCommas(n) {
    let revNumArr = n.toString().split('').reverse(),
        resultNumArrRev = [];
    for (let i = 0; i < revNumArr.length; i += 3)
        resultNumArrRev.push(revNumArr.slice(i, i + 3).reverse().join(''));
    return resultNumArrRev.reverse().join(',');
}