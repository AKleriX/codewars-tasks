function longestConsec(strarr, k) {
    let resultSrt = '';
    for (let i = 0; i < strarr.length - k + 1; i++){
        let tempStr = ''
        for (let j = 0; j < k; j++)
            tempStr += strarr[i + j];
        if (resultSrt.length < tempStr.length)
            resultSrt = tempStr;
    }
    return resultSrt;
}