function Xbonacci(signature,n){
    let sigLength = signature.length;
    for (let i = 0; i < n; i++)
        signature.push(signature.slice(i, i + sigLength).reduce((sum, num) => sum + num));
    return n === 0 ? [] : signature.slice(0, n);
}