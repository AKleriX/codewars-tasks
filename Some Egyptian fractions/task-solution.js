function decompose(n) {
    if (n.indexOf('/') !== -1)
        n = n.split('/').map(item => Number(item));
    else {
        let tmp = n;
        n = [];
        n[0] = Number(tmp);
        n[1] = 1;
    }

    if (n[0] === 0 || n[1] === 0)
        return [];

    while (n[0] % 1) {
        n[0] = n[0] * 10;
        n[1] = n[1] * 10;
    }


    let result = [];
    while (n[0] !== 0 && n[1] !== 0) {

        if (n[0] >= n[1]){

            result.push(String(Math.trunc(n[0] / n[1])));
            n[0] -= Math.trunc(n[0] / n[1]) * n[1];

        }

        else {

            let tmp;
            if (n[1] % n[0] === 0)
                tmp = n[1] / n[0];
            else
                tmp = Math.trunc(n[1] / n[0]) + 1;

            result.push(`1/${tmp}`);
            n[0] = n[0] * tmp - n[1];
            n[1] = n[1] * tmp;
        }
    }
    return result;
}