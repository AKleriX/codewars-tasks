function tribonacci(signature,n){
    for (let i = 3; i < n; i++)
        signature.push(signature[i - 3] + signature[i - 2]+ signature[i - 1]);
    return n === 0 ? [] : signature.slice(0, n);
}