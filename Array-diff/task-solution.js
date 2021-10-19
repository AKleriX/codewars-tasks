function arrayDiff(a, b) {
    let resultArr = [];

    a.forEach(item => {
        if (b.indexOf(item) === -1)
            resultArr.push(item);
    });

    return resultArr;
}