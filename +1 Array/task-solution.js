function upArray(arr){
    let carry = 1;
    if (arr.length === 0) return null;
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] < 0 || arr[i] > 9 || parseInt(arr[i]) !== arr[i]){
            carry = -1;
            break;
        }
        let newNum = arr[i] + carry;
        if (newNum < 10){
            carry = 0;
            arr[i] = newNum;
        } else arr[i] = newNum % 10;
    }
    if (carry === 1) arr.unshift(1);
    else if (carry === -1) return null;
    return arr;
}