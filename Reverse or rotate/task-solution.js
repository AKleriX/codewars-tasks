function revrot(str, sz) {
    if (str.length < sz || sz <= 0) return '';
    let indexSlice = 0, resultStr = '';
    while (indexSlice < str.length) {
        let tmp = str.slice(indexSlice, indexSlice + sz).split('');
        indexSlice += sz;
        if (tmp.length < sz) break;
        if (tmp.reduce((sumCubes, digital) => {
            return sumCubes + Math.pow(digital, 3);
        }, 0) % 2) resultStr += tmp.concat(tmp.splice(0,1)).join('');
        else resultStr += tmp.reverse().join('');
    }
    return resultStr;
}