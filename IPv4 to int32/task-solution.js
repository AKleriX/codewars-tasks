function ipToInt32(ip){
    return parseInt(ip.split('.').map(num => {
        let dNum = Number(num).toString(2);
        if (dNum.length < 8) dNum = '0'.repeat(8 - dNum.length) + dNum;
        return dNum;
    }).join(''), 2);
}