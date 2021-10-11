function listSquared(m, n) {
    let resArr = [];

    for (let i = m; i <= n ; i++){
        let delSumSquar = 0;

        for (let j = 1; j <= i; j++)
            if (i % j === 0)
                delSumSquar += Math.pow(j, 2);

        if (Math.sqrt(delSumSquar) % 1 === 0)
            resArr.push([i, delSumSquar]);
    }

    return resArr;
}