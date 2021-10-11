function mergesorted(a, b) {

    if (a.join() === b.join()){
        let resultArr = [];
        for (let i = 0; i < a.length; i++)
            resultArr.push(a[i], b[i]);
        return resultArr;
    }

    if (a[a.length - 1] <= b[0])
        return a.concat(b);

    return b.concat(a);
}